Cats.delete_all
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
        @cats = User.
    end
end

puts Cat.all.count