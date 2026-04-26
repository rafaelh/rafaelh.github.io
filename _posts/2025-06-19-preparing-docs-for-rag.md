---
title: Preparing Documents for RAG
date: 2025-06-19
layout: post
published: false
permalink: /2025/06/preparing-docs-for-rag/
featured_image: /assets/img/background.jpg
excerpt: Retrieval Augmented Generation (RAG) is great and makes AI work 100% of the time 😝 (it doesn't) so do you dump your Office files into it and call it a day? Structuring the knowledge in the documents and understanding how RAG works will get you better results. It will also help you know what limitations to expect.
---

URL:
[Amass](https://github.com/OWASP/Amass#-owasp-amass)

Image:
![Views on DevOps]({{site.baseurl}}/assets/img/2018/2018-02-23-devops-ecosystem.jpg)

---

Retrieval‑Augmented Generation (RAG) sounds like the perfect solution to hallucinating AIs. There is a whole [AI Incident Database](https://incidentdatabase.ai/) to make people worry. In comes RAG on its white horse, promising to back LLM output with hard data so that it doesn't make those mistakes any more.

Unfortunately, it doesn't work quite like that, despite often being sold that way to address concerns.


# RAG != LLM thinking with everything in the Knowledgebase

Let's be clear, RAG is great, and it can lead to much better outcomes. It can be implemented in a variety of ways, but the typical approach is that after you have sent your prompt to the LLM, the system will then do a semantic search of the Knowledgebase. From that, it will use a probabilistic method, usually Top-K to select chunks of the knowledgebase that are *probably* related to the query and they'll be submitted to the LLM with the prompt. The LLM then generates its output based on that, and that alone.

> User prompt → Semantic / Vector Search (top‑k hits) → Prompt template with citations → LLM → Output

* **Only the *k* highest‑scoring chunks** are sent to the LLM, typically 4‑20 passages

* **Semantic ranking** (scoring and ordering the hits) is *search‑side tuning* - it controls *what* reaches the model

* **Model fine‑tuning** changes the model’s *reasoning style* or domain language. The two levers are complementary but independent

If your knowledge base is a lake, each RAG prompt draws a bucket from it, but the results aren't a distillation of the entire body of water.

# Structuring your Knowledgebase

## Chunk for context, not size
Split text so that each chunk can answer a single user question without its neighbours. You should aim for something in the 50 to 300 token range, adjusting based on what is necessary to answer the question. How big is a token? [Glad you asked](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them); about 4 characters, but this includes spaces, and will vary from model to model. You can estimate the number of tokens in a block of text using [OpenAI's Tokenizer](https://platform.openai.com/tokenizer) or do a search for one of many other similar tools. OpenAI themselves use the [tiktoken](https://github.com/openai/tiktoken) python byte pair encoding (BPE) library, so building your own tool is relatively straightforwards. Depending on the RAG tools you are using, its likely that you will be able to tune the size. Azure AI Search for example suggests starting at [256 tokens](https://learn.microsoft.com/en-us/azure/search/vector-search-how-to-chunk-documents).



## Attach rich metadata
Your content should be annotated with metadata - file path, author, publish date, security tag - anything that lets you filter before scoring. Good metadata improves the semantic search and since its only the chunk that is sent to the LLM, it doesn't drive up your token count and costs. How you add metadata will depend on the system you are using

**3 — Normalize and deduplicate**
Hash each chunk and skip it if you have seen the hash before. Duplicate paragraphs bloat the index and can drown out fresher content.

**4 — Version explicitly**
Content evolves. Add a `doc_version`, `valid_from`, or similar field so old answers don’t leak into new prompts. Store version info in the primary key if your vector DB supports composites.

**5 — Separate “gold” from “bronze”**
Draft or low‑confidence material shouldn’t compete with your vetted corpus. Keep separate indexes, or tag drafts and filter them out at query time.

---

## 2. Reference pipeline: Azure Storage → Azure AI Search

1. **Drop raw files**—PDF, DOCX, Markdown, HTML, even images—into an **Azure Blob Storage** container.
2. An **Azure AI Search Indexer** watches that container. Built‑in skills (layout, OCR) split documents into logical *chunks* and generate embeddings via **Azure OpenAI**. You can swap the default fixed‑size splitter for the open‑source *chunking skill* from Microsoft’s Power Skills repo if you need smarter boundaries.
3. Vectors and metadata land in an **Azure AI Search index**. The 2025 release added *multi‑vector fields* and *semantic scoring profiles*, so you can stash both title‑level and paragraph‑level embeddings and re‑rank them together.
4. Your app (LangChain, Semantic Kernel, or plain REST) sends the user question, receives the top‑k hits, injects them into a prompt, and finally calls the LLM.

Swap Blob + AI Search for S3 + Kendra, or Postgres + pgvector—everything else stays the same.

---

## 3. Five data‑design principles that travel with you

**1 — Chunk for context, not size**
Split text so that each chunk can—or at least *should*—answer a single user question without its neighbours. Aim for something in the 50‑ to 300‑token ballpark, adjusting for your domain.

**2 — Attach rich metadata**
File path, author, publish date, security tag—anything that lets you filter before scoring. Good metadata trims false positives and speeds queries.

**3 — Normalize and deduplicate**
Hash each chunk and skip it if you have seen the hash before. Duplicate paragraphs bloat the index and can drown out fresher content.

**4 — Version explicitly**
Content evolves. Add a `doc_version`, `valid_from`, or similar field so old answers don’t leak into new prompts. Store version info in the primary key if your vector DB supports composites.

**5 — Separate “gold” from “bronze”**
Draft or low‑confidence material shouldn’t compete with your vetted corpus. Keep separate indexes, or tag drafts and filter them out at query time.

---

## 4. Updating the vector store

Stale content is worse than no content—people trust AI answers implicitly. A healthy pipeline handles four common events:

* **New or modified file** – Use incremental crawling. Azure Indexers compare blob ETags or last‑modified timestamps and re‑process only the changes.
* **Deleted file** – Start with a soft‑delete flag, then schedule a hard purge. Azure’s `deletionDetectionPolicy` maps missing blobs to delete actions automatically.
* **Major re‑chunking (e.g., new splitter algorithm)** – Re‑index into a *shadow index* and flip an alias when tests pass. This is your blue‑green deployment for search.
* **Embedding model upgrade** – Store the model name or embedding dimension with each vector so you can phase in a new model side‑by‑side. Re‑embedding happens in the background without downtime.

Automation tools vary—Azure Data Factory, Logic Apps, GitHub Actions, Airflow, Dagster, Prefect—but the pattern remains: detect change → ( re‑ ) process → swap atomically.

---

## 5. Lowering the barrier for non‑technical contributors

* **Drag‑and‑drop upload** – Tools like the *llama‑hub uploader* or the *RAGFlow UI* provide a simple web form that writes to your object store and posts a message to the ingest queue.
* **Content editing & review** – Keep source files in Git (Markdown works great). Pull Requests double as change history and trigger your CI re‑ingest pipeline.
* **No‑code pipelines** – Stacks such as *LangChain Serve* bundled with *Unstructured* let you deploy a watch‑folder‑to‑Chroma workflow in Docker with almost zero code.
* **Low‑code search tuning** – Azure AI Search exposes *Semantic Scoring Profiles* in the portal, so business owners can boost freshness or certain tags without touching vectors.
* **Governance dashboards** – Haystack’s knowledge‑graph extension or Semantic Kernel’s Planner show lineage, usage frequency, and orphaned chunks so editors can prune with confidence.

The guiding principle is always the same:

> *Keep raw files in object storage → run an idempotent, observable ingestion job → land vectors + metadata in a query‑optimised store → surface a friendly UI so domain experts, not just engineers, own the knowledge.*

---

## Closing thoughts

A well‑structured vector store is the quiet super‑power behind any successful RAG system. Whether you are on Azure, AWS, or open‑source:

* **Design your chunks and metadata intentionally**—they decide what the model reads.
* **Treat search tuning as search tuning**; reach for model fine‑tuning only when ranking can’t close the gap.
* **Automate freshness** so that yesterday’s answers never embarrass tomorrow’s chatbot.

Do the boring data architecture work up‑front, and your LLM will sound magically well‑informed thereafter.
