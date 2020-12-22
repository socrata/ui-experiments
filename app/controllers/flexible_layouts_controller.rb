class FlexibleLayoutsController < ApplicationController
  def show
    @compaction = params[:compaction] == 'vertical' ? 'vertical' : 'free-movement'
  end
end
