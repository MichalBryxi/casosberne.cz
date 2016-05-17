module Api
  module V1
    class TweetsController < ApplicationController
      before_action do
        params[:image] ||= params.delete :file
      end

      def create
        @tweet = Tweet.new(tweet_params)

        render json: @tweet
      end

      private

      def tweet_params
        params.permit(:image, :message)
      end
    end
  end
end
