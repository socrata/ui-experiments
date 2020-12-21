Rails.application.routes.draw do
  get 'flexible_layouts/show'
  resource :smart_status_test_result do
    get :start
    get :test_a
    get :test_a_feedback
    get :test_b
    get :test_b_feedback
    get :test_c
    get :test_c_feedback
    get :test_d
    get :test_d_feedback

    post :validate_step
  end

  get '/flexible-layouts', to: 'flexible_layouts#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
