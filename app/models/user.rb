class User < ApplicationRecord
  has_many :enrollments
  has_many :courses, through: :enrollments

  has_many :enrollments, dependent: :destroy

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
