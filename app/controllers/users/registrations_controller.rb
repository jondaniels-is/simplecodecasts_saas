#Modify Devise Gem to include params for pro users and run payment through stripe
#Requires white listing of sign_up params in application_controller

class Users::RegistrationsController < Devise::RegistrationsController
  def create
    super do |resource|
      if params[:plan]
        resource.plan_id = params[:plan]
        if resource.plan_id == 2
          #save_with_payment defined in models/user.rb
          resource.save_with_payment
        else
          resource.save
        end
      end
    end
  end
end
