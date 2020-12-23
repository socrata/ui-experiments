require 'test_helper'

class FlexibleLayoutsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get flexible_layouts_show_url
    assert_response :success
  end

end
