class CreateSmartStatusTestResults < ActiveRecord::Migration[5.2]
  def change
    create_table :smart_status_test_results do |t|
      t.string :unique_survey_code

      t.string :test_a_field_1_status
      t.string :test_a_field_1_above_below
      t.string :test_a_field_1_status_override

      t.numeric :test_a_field_2_number_value
      t.string :test_a_field_2_above_below
      t.string :test_a_field_2_status
      t.string :test_a_field_2_status_override

      t.text :test_a_general_feedback

      t.numeric :test_b_field_1_number_value
      t.string :test_b_field_1_status
      t.string :test_b_field_1_status_override

      t.string :test_b_field_2_number_value
      t.string :test_b_field_2_status
      t.string :test_b_field_2_status_override

      t.text :test_b_general_feedback

      t.string :test_c_field_1_above_below
      t.string :test_c_field_1_status
      t.string :test_c_field_1_status_override

      t.numeric :test_c_field_2_number_value
      t.string :test_c_field_2_above_below
      t.string :test_c_field_2_status
      t.string :test_c_field_2_status_override

      t.text :test_c_general_feedback

      t.string :test_d_field_1_status
      t.numeric :test_d_field_1_number_value
      t.string :test_d_field_1_status_override

      t.string :test_d_field_2_status
      t.numeric :test_d_field_2_number_value
      t.string :test_d_field_2_status_override

      t.text :test_d_general_feedback

      t.timestamps
    end
  end
end
