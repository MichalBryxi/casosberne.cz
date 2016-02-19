require 'open-uri'

class Post < ActiveRecord::Base
  belongs_to :project
  belongs_to :parser

  scope :unparsed, -> { where(parsed: false) }

  def parse
    puts "> Parsing #{body}"
    urls = URI.extract(body, ['http', 'https'])
    urls.each do |url|
      puts "Trying URL #{url}"
      begin
        response = final_url = ''

        open(url, allow_redirections: :all) do |h|
          response = h.read
          final_url = h.base_uri.to_s
        end

        puts "Final URL is #{final_url}"

        domain = URI.parse(final_url).host
        parser = Parser.where({domain: domain}).first_or_create
        dom = Nokogiri::HTML(response).css(parser.css_selector)

        puts "Domain is #{domain}"
        puts "CSS selector is #{parser.css_selector}"

        if dom[0] and dom[0]['src']
          image = dom[0]['src']
          puts "Image found: #{image}\n"
          self.image = image
        end

        self.parser = parser
        self.save!
        break # It's ok, we already have some image
      rescue => e
        puts "Error: " + e.to_s
      end
    end

    self.parsed = true
    self.save!
  end
end
