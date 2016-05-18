module Api
  module V1
    # TODO: In ideal case we would like to inherit from BaseController and use JSONAPI
    class TweetsController < ApplicationController
      before_action do
        params[:image] ||= params.delete :file
      end

      def create
        @tweet = Tweet.new(tweet_params)
        @tweet.save!

        # $twitter.update_with_media("Test", tweet_params[:image])

        render json: @tweet
      end

      private

      def tweet_params
        params.permit(:image, :message)
      end
    end
  end
end
