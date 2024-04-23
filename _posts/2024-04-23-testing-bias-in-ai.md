---
title: Testing for Bias in AI
date: 2024-04-23
layout: post
published: true
permalink: /2024/04/testing-for-bias-in-au/
featured_image: /assets/img/2024/bias-in-ai.jpg
excerpt: AI can do a lot (except write blog posts that don't put you to sleep) and it's generally agreed that it would be a bad thing if it were biased. It seems that the volume of material on the need to test for bias vastly outweighs the material on how to actually do it, so here are the results of an evening I spent going down a very interesting rabbit hole.
---

AI can do a lot (except write blog posts that don't put you to sleep) and it's generally agreed that it would be a bad thing if it were biased. It seems that the volume of material on the need to test for bias vastly outweighs the material on how to actually do it, so here are the results of an evening I spent going down a very interesting rabbit hole.

The most likely instance in which bias in AI tools will become an issue is if there is a distinctly favourable or unfavourable outcome, with AI being involved in the decision. At the risk of stating the obvious, this means that if you are implementing an AI tool that helps you format emails, or summarize documents, bias may not be your leading concern. If the tool contributes to making decisions however, then establishing bias metrics becomes important and should feed into your AI governance program (you have one of those, right?)

Testing for bias in AI is done through statistical analysis to provably demonstrate the fairness of the outcomes in a large dataset. Once you've identified an outcome which will be harmful if a particular group is over or under-selected, you can test a sample dataset to see if your AI tool has a bias and needs adjustment.

What follows are a few methods that can be used as part of testing: Statistical Parity, Equality of Opportunity, Disparate Impact, and Disaggregated Analysis.


# Statistical Parity
Statistical or demographic parity measures whether the likelihood of a favourable outcome is independent of membership in a specified group. It's calculated like this:

***P(Ŷ = 1 ∣ G = g1​) = P(Ŷ = 1 ∣ G = g2​)***

Where:
* ***Ŷ*** = 1 indicates a favourable outcome predicted by the model
* ***G*** is a sensitive attribute (e.g. ethnicity, gender) with groups *g1* and *g2*.
* The closer the outcome is to 0, the more likely different groups have the same chance of achieving a positive outcome.

Now, I'm terrible at maths, so that's mostly gibberish to me. I find it easier to think about in terms of code where the functions do the maths for me:

```python
import pandas as pd

# A Sample DataFrame. A favourable outcome is a '1'. The Group represents two
# different sets of people being analysed against that outcome. In practice this
# will likely be a giant CSV file.
data = {
    'Outcome': [1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    'Group': ['A', 'A', 'B', 'B', 'A', 'B', 'A', 'B', 'A', 'B']
}
df = pd.DataFrame(data)

# Calculate probabilities of favourable outcome for each group
prob_group_a = df[df['Group'] == 'A']['Outcome'].mean()
prob_group_b = df[df['Group'] == 'B']['Outcome'].mean()

# Calculate Statistical Parity
statistical_parity = abs(prob_group_a - prob_group_b)

# If the statistical parity equals 0, each group has the same chance of having a
# favourable outcome. If it deviates from 0 then there is a disparity of how
# decisions are made between the groups.
print(f"Statistical Parity: {statistical_parity}")
```

# Equality of Opportunity
Equality of Opportunity is met when everyone in a sample has the same chance of gaining a positive outcome, such as making past an HRIS's AI screening system. It uses True Positive rates (favourable outcomes) to determine that each group succeeds to the same degree.

True Positive Rate (TPR) is calculated as **TPR=TP/TP+FN**.

Where:
- **TP (True Positives):** Number of correct predictions where the model correctly predicts the positive outcome.
- **FN (False Negatives):** Number of instances where the model incorrectly predicts the negative class when it should have predicted the positive outcome.

Example:
* Men: 80 applied, 40 actually qualified, 30 make it through screening.
	* TPR for Men who applied = 30/40 = **0.75**
* Women: 70 applied, 35 actually qualified, 20 make it through screening.
	* TPR for Women who applied = 20/35 = **0.57**

The disparity between the True Positive Rates then shows you to what degree each group is treated favourably by the tool.

# Disparate Impact
Apparently this is measured by the "80% rule". This metric considers a model fair if the positive outcome rate for any group is not less than 80% of the rate for the group with the highest positive outcome rate. I find myself thinking of it as 'Minimum Viable Fairness' since it clearly tolerates a quantity of disparity.

# Disaggregated Analysis
Lastly, disaggregated analysis involves breaking down aggregate data into smaller subgroups to understand how outcomes differ across these groups. This type of analysis can identify hidden patterns or biases that may not be visible in a broader analysis where volume of data may hide pockets of bias. It allows for a detailed examination of how different factors such as ethnicity, gender, age, or socioeconomic status affect outcomes within a dataset. This is done with a range of statistical methods; there isn't a common set of calculations that can be performed.


In summary...
There are a ton of other methods because it's maths, but these few give a pretty good taste of how testing can be performed. What we will probably see is a burgeoning new industry of external consultancies who will recruit university students to do this in python and excel and charge them out at a healthy day rate.