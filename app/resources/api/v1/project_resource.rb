class Api::V1::ProjectResource < JSONAPI::Resource
  attributes :name, :description, :hashtag, :image, :posts_count, :cursor
  
  has_many :posts
end
