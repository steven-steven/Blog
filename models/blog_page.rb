class BlogPage < Sitepress::Model
  collection glob: "blog/*.html.*"
  data :title

  def publish_at
    Chronic.parse data.fetch("publish_at")
  end

  def published?
    publish_at < Time.current
  end

  def self.published
    all.select(&:published?).sort_by(&:publish_at)
  end
end
