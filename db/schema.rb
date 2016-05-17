# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160517200641) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "parsers", force: :cascade do |t|
    t.string   "domain"
    t.string   "css_selector"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string   "body"
    t.string   "image"
    t.integer  "project_id"
    t.integer  "parser_id"
    t.boolean  "parsed",     default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "hashtag"
    t.string   "image"
    t.integer  "posts_count",                default: 0,   null: false
    t.decimal  "cursor",      precision: 24
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.float    "latitude",                   default: 0.0, null: false
    t.float    "longitude",                  default: 0.0, null: false
  end

  create_table "tweets", force: :cascade do |t|
    t.string   "message"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

end
