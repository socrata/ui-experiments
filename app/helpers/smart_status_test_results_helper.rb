module SmartStatusTestResultsHelper

  def options_for_test_a_field_1_status
    options_for_select(
      {
        'Select' => nil,
        'On-track (green)' => 'green',
        'Off target (red)' => 'red'
      },
      get_saved_attribute(:test_a_field_1_status)
    )
  end

  def options_for_test_a_field_1_above_below
    options_for_select(
      {
        'Select' => nil,
        'Above' => 'above',
        'Below' => 'below'
      },
      get_saved_attribute(:test_a_field_1_above_below)
    )
  end

  def options_for_test_a_field_2_status
    options_for_select(
      {
        'Select' => nil,
        'Near target (yellow)' => 'yellow'
      },
      get_saved_attribute(:test_a_field_2_status)
    )
  end

  def options_for_test_a_field_2_above_below
    options_for_select(
      {
        'Select' => nil,
        'Above' => 'above',
        'Below' => 'below'
      },
      get_saved_attribute(:test_a_field_2_above_below)
    )
  end

  def options_for_test_b_field_1_status
    options_for_select(
      {
        'Select' => nil,
        'On-track (green)' => 'green',
        'Near target (yellow)' => 'yellow'
      },
      get_saved_attribute(:test_b_field_1_status)
    )
  end

  def options_for_test_b_field_2_status
    options_for_select(
      {
        'Select' => nil,
        'On-track (green)' => 'green',
        'Near target (yellow)' => 'yellow'
      },
      get_saved_attribute(:test_b_field_2_status)
    )
  end

  def options_for_test_c_field_1_above_below
    options_for_select(
      {
        'Select' => nil,
        'Above' => 'above',
        'Below' => 'below'
      },
      get_saved_attribute(:test_c_field_1_above_below)
    )
  end

  def options_for_test_c_field_1_status
    options_for_select(
      {
        'Select' => nil,
        'On-track (green)' => 'green',
        'Off target (red)' => 'red'
      },
      get_saved_attribute(:test_c_field_1_status)
    )
  end

  def options_for_test_c_field_2_above_below
    options_for_select(
      {
        'Select' => nil,
        'Above' => 'above',
        'Below' => 'below'
      },
      get_saved_attribute(:test_c_field_2_above_below)
    )
  end

  def options_for_test_c_field_2_status
    options_for_select(
      {
        'Select' => nil,
        'Near target (yellow)' => 'yellow'
      },
      get_saved_attribute(:test_c_field_2_status)
    )
  end

  def options_for_test_d_field_1_status
    options_for_select(
      {
        'Select' => nil,
        'On-track (green)' => 'green',
        'Near target (yellow)' => 'yellow'
      },
      get_saved_attribute(:test_d_field_1_status)
    )
  end

  def options_for_test_d_field_2_status
    options_for_select(
      {
        'Select' => nil,
        'On-track (green)' => 'green',
        'Near target (yellow)' => 'yellow'
      },
      get_saved_attribute(:test_d_field_2_status)
    )
  end

  def first_step?
    session[:steps].first == @current_step
  end

  private

  def get_saved_attribute(attr)
    session[:smart_status_test_result_attributes].try(:[], attr.to_s)
  end
end
