import User from './test'

const user = {
    name: 'Brian',
    age: 100,
    email: 'test@example.org'
}

// Create
const create = async () => {
    const userSchema = new User(user)
    const result = await userSchema.save()
    console.log(result)
}

create()

// Read
const read = async () => {
    const result = await User.find()
    console.log(result)
}

read()

// Update
const update = async () => {
    const result = await User.updateOne({name: 'Brian'}, {email: 'test@example.com.au'})
    console.log(result)
}

update()

// Delete
const deleteAll = async () => {
    const result = await User.deleteMany({name: 'Brian'})
    console.log(result)
}

deleteAll()