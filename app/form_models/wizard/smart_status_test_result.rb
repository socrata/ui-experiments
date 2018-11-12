module Wizard
  module SmartStatusTestResult

    class Base
      include ActiveModel::Model
      attr_accessor :smart_status_test_result

      delegate *::SmartStatusTestResult.attribute_names.map { |attr| [attr, "#{attr}="] }.flatten,
        to: :smart_status_test_result

      def initialize(smart_status_test_result_attributes)
        @smart_status_test_result = ::SmartStatusTestResult.new(smart_status_test_result_attributes)
      end
    end

    class TestA < Base
      validates :test_a_field_1_status, presence: true
      validates :test_a_field_1_above_below, presence: true
    end

    class TestAFeedback < Base
      validates :test_a_general_feedback, presence: true
    end

    class TestB < Base
      validates :test_b_field_1_number_value, numericality: true
      validates :test_b_field_1_status, presence: true

      validates :test_b_field_2_number_value, numericality: true, allow_blank: true
    end

    class TestBFeedback < Base
      validates :test_b_general_feedback, presence: true
    end

    class TestC < Base
      validates :test_c_field_1_above_below, presence: true
      validates :test_c_field_1_status, presence: true

      validates :test_c_field_2_number_value, numericality: true, allow_blank: true
    end

    class TestCFeedback < Base
      validates :test_c_general_feedback, presence: true
    end

    class TestD < Base
      validates :test_d_field_1_number_value, presence: true, numericality: true
      validates :test_d_field_1_status, presence: true

      validates :test_d_field_2_number_value, numericality: true, allow_blank: true
    end

    class TestDFeedback < Base
      validates :test_d_general_feedback, presence: true
    end
  end
end
