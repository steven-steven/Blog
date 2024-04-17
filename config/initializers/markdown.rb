# ./config/initializers/markdown.rb

class ApplicationMarkdown < MarkdownRails::Renderer::Rails
  include Redcarpet::Render::SmartyPants
  include MarkdownRails::Helper::Rouge

  # These flags control features in the Redcarpet renderer, which you can read
  # about at https://github.com/vmg/redcarpet#and-its-like-really-simple-to-use
  # Make sure you know what you're doing if you're using this to render user inputs.
  def enable
    [:fenced_code_blocks]
  end

  # Example of how you might override the images to show embeds, like a YouTube video.
  def image(link, title, alt)
    url = URI(link)
    case url.host
    when "www.youtube.com"
      youtube_tag url, alt
    else
      super
    end
  end

  private
    # This is provided as an example; there's many more YouTube URLs that this wouldn't catch.
    def youtube_tag(url, alt)
      embed_url = "https://www.youtube-nocookie.com/embed/#{CGI.parse(url.query).fetch("v").first}"
      content_tag :iframe,
        src: embed_url,
        width: 560,
        height: 325,
        allow: "encrypted-media; picture-in-picture",
        allowfullscreen: true \
          do alt end
    end
end

MarkdownRails.handle :md do
  ApplicationMarkdown.new
end
