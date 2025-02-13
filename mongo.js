const mongoose = require('mongoose')

const url = `mongodb+srv://Cluster50703:Mehedi22@cluster50703.xgvco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster50703`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const todoSchema = new mongoose.Schema({
    text: String
})

const Todo = mongoose.model('Todo', todoSchema)

const todo = new Todo({
    text: 'how to get a nepali gof'
})

todo.save().then((result) => {
    console.log('note saved!')
    mongoose.connection.close()
})