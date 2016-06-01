module Api
  module V1
    # TODO: In ideal case we would like to inherit from BaseController and use JSONAPI
    class TweetsController < ApplicationController
      before_action do
        params[:image] ||= params.delete :file
        if params[:project_id]
          project = Project.find(params[:project_id])
          params[:message] += " \##{project[:hashtag]}"
        end
      end

      def create
        @tweet = Tweet.new(tweet_params)
        @tweet.save!

        image = open(URI.parse(URI.encode(@tweet.image.url(:medium))))
        $twitter.update_with_media(@tweet.message, image)

        render json: @tweet
      end

      private

      def tweet_params
        params.permit(:image, :message, :project_id)
      end
    end
  end
end
