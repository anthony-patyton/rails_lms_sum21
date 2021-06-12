class Course < ApplicationRecord
  has_many :enrollments
  has_many :users, through: :enrollments
  
  validates :name, presence: true
  validates :name, uniqueness: true
end
