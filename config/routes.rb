Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :projects
    end
  end

  mount_ember_app :frontend, to: "/"
end
