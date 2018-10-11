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

ActiveRecord::Schema.define(version: 2018_10_11_165933) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "smart_status_test_results", force: :cascade do |t|
    t.string "unique_survey_code"
    t.string "test_a_field_1_status"
    t.string "test_a_field_1_above_below"
    t.string "test_a_field_1_status_override"
    t.decimal "test_a_field_2_number_value"
    t.string "test_a_field_2_above_below"
    t.string "test_a_field_2_status"
    t.string "test_a_field_2_status_override"
    t.text "test_a_general_feedback"
    t.decimal "test_b_field_1_number_value"
    t.string "test_b_field_1_status"
    t.string "test_b_field_1_status_override"
    t.string "test_b_field_2_number_value"
    t.string "test_b_field_2_status"
    t.string "test_b_field_2_status_override"
    t.text "test_b_general_feedback"
    t.string "test_c_field_1_above_below"
    t.string "test_c_field_1_status"
    t.string "test_c_field_1_status_override"
    t.decimal "test_c_field_2_number_value"
    t.string "test_c_field_2_above_below"
    t.string "test_c_field_2_status"
    t.string "test_c_field_2_status_override"
    t.text "test_c_general_feedback"
    t.string "test_d_field_1_status"
    t.decimal "test_d_field_1_number_value"
    t.string "test_d_field_1_status_override"
    t.string "test_d_field_2_status"
    t.decimal "test_d_field_2_number_value"
    t.string "test_d_field_2_status_override"
    t.text "test_d_general_feedback"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
