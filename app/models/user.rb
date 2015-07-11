class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  belongs_to :plan
  attr_accessor :stripe_card_token
  
  def save_with_payment
    if valid?
      #Send info to Stripe > creates a new customer and charges the customer
      customer = Stripe::Customer.create(description: email, plan: plan_id, card: stripe_card_token)
      #Stripe returns customer.id
      self.stripe_customer_token = customer.id
      save!
    end
  end
  
end