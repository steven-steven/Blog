class WorkPage < Sitepress::Model
  collection glob: "works/*.html.*"
  data :title, :subtitle

  def order = data.fetch("order")

  def self.ordered
    all.sort_by(&:order).reverse
  end
end
