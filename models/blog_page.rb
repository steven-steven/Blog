class BlogPage < Sitepress::Model
  collection glob: "blog/*.html.*"
  data :title

  def publish_at
    Chronic.parse data.fetch("publish_at")
  end

  def tags
    data.fetch("tags", "").split(",").map(&:strip)
  end

  def published?
    publish_at < Time.current
  end

  def self.published
    all.select(&:published?).sort_by(&:publish_at)
  end

  def self.all_tags
    all.map(&:tags).flatten.uniq
  end
end
