class ApplicationMarkdown < MarkdownRails::Renderer::Rails
  def enable
    [:with_toc_data]
  end

  def renderer
    ::Redcarpet::Markdown.new(self.class.new(with_toc_data: true), **features)
  end

  def image(link, title, alt_text)
    # e.g. ![alt =100x100](url.png)
    if title =~ /=(\d+)x(\d+)/
      %(<img src="#{link}" width="#{$1}" height="#{$2}" alt="#{alt_text}" style="margin: 1.5rem auto;">)
    else
      %(<img src="#{link}" title="#{title}" alt="#{alt_text}" style="margin: 1.5rem auto;">)
    end
  end
end

MarkdownRails.handle :md, :markdown do
  ApplicationMarkdown.new
end
