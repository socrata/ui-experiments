class FlexibleLayoutsController < ApplicationController
  def show
    @compaction = params[:compaction]
  end
end
