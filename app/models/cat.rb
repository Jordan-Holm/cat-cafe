class Cat < ApplicationRecord
  belongs_to :user

  validates :name, :breed, :avatar, presence: true
end
