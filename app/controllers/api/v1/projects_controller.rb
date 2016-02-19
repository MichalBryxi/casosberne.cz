module Api
  module V1
    class Api::V1::ProjectsController < Api::BaseController
      include JSONAPI::ActsAsResourceController
    end
  end
end
