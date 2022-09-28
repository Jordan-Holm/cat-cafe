class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :registry
      t.string :avatar
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
