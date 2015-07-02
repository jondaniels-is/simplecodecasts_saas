class PagesController < ApplicationController
  def about
  end
  
  def home
    @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
  end  
end
