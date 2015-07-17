class ProfilesController < ApplicationController
    def new
        # form where a user can fill out thier own profile.
        @user = User.find( params[:user_id] )
        @profile = @user.build_profile # we can do this because of the nested route in routes.rb
    end
end