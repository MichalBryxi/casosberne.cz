class AddProjectIdToTweets < ActiveRecord::Migration
  def change
    add_column :tweets, :project_id, :integer, null: true, default: nil
  end
end
