class AddDataToPost < ActiveRecord::Migration
  def change
    add_column :posts, :payload, :json, null: true
    add_column :posts, :user, :string, null: true
    remove_column :posts, :image_file_name
    remove_column :posts, :image_content_type
    remove_column :posts, :image_file_size
    remove_column :posts, :image_updated_at
  end
end
