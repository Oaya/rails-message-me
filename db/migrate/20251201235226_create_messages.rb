class CreateMessages < ActiveRecord::Migration[7.2]
  def change
    create_table :messages do |t|
      t.timestamps
      t.string :body
      t.integer :user_id
    end
  end
end
