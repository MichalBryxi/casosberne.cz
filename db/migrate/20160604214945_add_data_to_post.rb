class AddDataToPost < ActiveRecord::Migration
  def change
    add_column :posts, :payload, :json, null: true
    add_column :posts, :user, :string, null: true
  end
end
