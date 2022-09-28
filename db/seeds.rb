Note.delete_all
Cat.delete_all 
User.delete_all 

i = 1 
5.times do 
  @user = User.create(
    email: "test#{i}@email.com",
    password: "password",
    fname: "test#{i}",
    lname: "testing#{i}"
  )
  i++

  10.times do 
    name = Faker::Creature::Cat.name
    cat = Cat.create(
      name: name, 
      breed: Faker::Creature::Cat.breed, 
      registry: Faker::Creature::Cat.registry, 
      avatar: Faker::Avatar.image(slug: 'cat', size: '100x400', format: 'png', set: 'set4'),
      user_id: @user.id
    )

    2.times do 
      Note.create(
        ndate: Faker::Date.forward(days: 23), 
        ntime: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
        subject: Faker::Tea.variety, 
        body: Faker::Space.agency, 
        cat_id: cat.id
      )
    end
  end 
end

puts Cat.all.count 
puts Note.all.count 