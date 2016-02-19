module Api
  module V1
    class Api::V1::PostsController < Api::BaseController
      include JSONAPI::ActsAsResourceController
    end
  end
end
