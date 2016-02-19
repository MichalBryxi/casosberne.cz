class CreateParsers < ActiveRecord::Migration
  def change
    create_table :parsers do |t|
      t.string   :domain
      t.string   :css_selector

      t.timestamps null: false
    end
  end
end
