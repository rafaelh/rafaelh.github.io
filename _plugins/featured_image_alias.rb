Jekyll::Hooks.register([:pages, :posts, :documents], :pre_render) do |doc, payload|
  next unless doc.data["featured_image"]
  doc.data["image"] ||= doc.data["featured_image"]
  payload["page"]["image"] ||= doc.data["featured_image"] if payload["page"].is_a?(Hash)
end
