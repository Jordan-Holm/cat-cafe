class Note < ApplicationRecord
  belongs_to :cat

  validates :ndate, :ntime, :subject, :body, presence: true
end
