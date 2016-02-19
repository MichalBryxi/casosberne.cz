class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :hashtag
      t.string :image
      t.integer :posts_count, null: false, default: 0
      t.decimal :cursor, null: true, precision: 24, scale: 0

      t.timestamps null: false
    end
  end
end
