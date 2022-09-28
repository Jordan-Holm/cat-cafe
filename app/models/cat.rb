class Cat < ApplicationRecord
  belongs_to :user
  has_many :notes, dependent: :destroy
  
  validates :name, :breed, :avatar, presence: true
end
