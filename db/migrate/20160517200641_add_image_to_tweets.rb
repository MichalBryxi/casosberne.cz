class AddImageToTweets < ActiveRecord::Migration
  def self.up
    add_attachment :tweets, :image
  end

  def self.down
    remove_attachment :tweets, :image
  end
end
