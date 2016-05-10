namespace :heroku do
  desc "Promotes app from curent staging to production"
  task promote: :environment do
    `heroku pipelines:promote -r staging`
    `heroku run rake db:migrate`
    `git tag`
  end
end
