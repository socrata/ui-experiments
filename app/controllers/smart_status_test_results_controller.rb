class SmartStatusTestResultsController < ApplicationController
  before_action :load_smart_status_test_result_wizard, except: %i(start validate_step)

  def start
    @current_step = session_steps.first
    @test_wizard = wizard_smart_status_test_result_for_step(@current_step)
    render @current_step
  end

  def validate_step
    @current_step = params[:current_step]

    @test_wizard = wizard_smart_status_test_result_for_step(@current_step)
    @test_wizard.smart_status_test_result.attributes = smart_status_test_result_params
    session[:smart_status_test_result_attributes] = @test_wizard.smart_status_test_result.attributes

    if go_back?
      next_step = wizard_smart_status_test_result_previous_step(@current_step)
    else
      next_step = wizard_smart_status_test_result_next_step(@current_step)
    end

    if go_back? || @test_wizard.valid?
      create and return unless next_step
      @current_step = next_step
    end

    render @current_step
  end

  def create
    if @test_wizard.smart_status_test_result.save
      session[:smart_status_test_result_attributes] = nil
      session[:steps] = nil
      render :finished, locals: { unique_survey_code: @test_wizard.smart_status_test_result.unique_survey_code }
    else
      redirect_to :error, alert: 'There was a problem saving your test results.'
    end
  end

  private

  def session_steps
    session[:steps] ||= %w(a b c d).shuffle.map { |test| ["test_#{test}", "test_#{test}_feedback"] }.flatten
  end

  def go_back?
    params[:back].present?
  end

  def set_smart_status_test_result
    @smart_status_test_result = SmartStatusTestResult.find(params[:id])
  end

  def load_smart_status_test_result_wizard
    @test_wizard = wizard_smart_status_test_result_for_step(action_name)
  end

  def wizard_smart_status_test_result_next_step(step)
    session_steps[session_steps.index(step) + 1]
  end

  def wizard_smart_status_test_result_previous_step(step)
    session_steps[session_steps.index(step) - 1]
  end

  def wizard_smart_status_test_result_for_step(step)
    raise InvalidStep unless step.in?(session_steps)

    "Wizard::SmartStatusTestResult::#{step.camelize}".constantize.new(session[:smart_status_test_result_attributes])
  end

    def smart_status_test_result_params
    params.
      require(:test_wizard).
      permit(
        :test_a_field_1_above_below,
        :test_a_field_1_status,
        :test_a_field_1_status_override,
        :test_a_field_2_number_value,
        :test_a_field_2_above_below,
        :test_a_field_2_status,
        :test_a_field_2_status_override,
        :test_a_general_feedback,
        :test_b_field_1_number_value,
        :test_b_field_1_status,
        :test_b_field_1_status_override,
        :test_b_field_2_number_value,
        :test_b_field_2_status,
        :test_b_field_2_status_override,
        :test_b_general_feedback,
        :test_c_field_1_above_below,
        :test_c_field_1_status,
        :test_c_field_1_status_override,
        :test_c_field_2_number_value,
        :test_c_field_2_above_below,
        :test_c_field_2_status,
        :test_c_field_2_status_override,
        :test_c_general_feedback,
        :test_d_field_1_number_value,
        :test_d_field_1_status,
        :test_d_field_1_status_override,
        :test_d_field_2_number_value,
        :test_d_field_2_status,
        :test_d_field_2_status_override,
        :test_d_general_feedback
      )
  end

  class InvalidStep < StandardError; end
end
