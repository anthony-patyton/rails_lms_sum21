class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :role, presence: true
  # validates :role, uniqueness: true
  validates :role, inclusion: { in: %w(teacher ta student),
  message: "%{value} is not a valid role", allow_blank: false}
end
