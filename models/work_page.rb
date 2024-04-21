class WorkPage < Sitepress::Model
  collection glob: "works/*.html.*"
  data :title, :subtitle
end
