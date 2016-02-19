class CreatePostsTable < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string   :body
      t.string   :image
      t.integer  :project_id, null: true
      t.integer  :parser_id, null: true
      t.boolean  :parsed, null: false, default: false

      t.timestamps null: false
    end
  end
end
