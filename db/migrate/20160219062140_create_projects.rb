class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :hashtag
      t.integer :posts_count, null: false, default: 0
      t.integer :cursor, null: true

      t.timestamps null: false
    end
  end
end
