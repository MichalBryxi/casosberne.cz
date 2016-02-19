class Api::V1::ProjectResource < JSONAPI::Resource
  attributes :name, :description, :hashtag, :posts_count, :cursor
end
