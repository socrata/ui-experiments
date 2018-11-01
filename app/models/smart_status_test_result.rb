require 'securerandom'

class SmartStatusTestResult < ApplicationRecord
  validates :test_a_field_1_status, presence: true
  validates :test_a_field_1_above_below, presence: true

  validates :test_a_general_feedback, presence: true

  validates :test_b_field_1_number_value, presence: true, numericality: true
  validates :test_b_field_1_status, presence: true

  validates :test_b_field_2_number_value, numericality: true, allow_blank: true

  validates :test_b_general_feedback, presence: true

  validates :test_c_field_1_above_below, presence: true
  validates :test_c_field_1_status, presence: true

  validates :test_c_field_2_number_value, numericality: true, allow_blank: true

  validates :test_c_general_feedback, presence: true

  validates :test_d_field_1_number_value, presence: true, numericality: true
  validates :test_d_field_1_status, presence: true

  validates :test_d_field_2_number_value, numericality: true, allow_blank: true
  validates :test_d_field_2_status, presence: true

  validates :test_d_general_feedback, presence: true

  before_create :assign_unique_survey_code

  private

  def assign_unique_survey_code
    self.unique_survey_code = SecureRandom.hex(8)
  end
end
