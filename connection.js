const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://root:toor@cluster0.ar5p1.mongodb.net/e-learning?retryWrites=true&w=majority', { useNewUrlParser: true }, (error) => {
    // const connection = mongoose.connect('mongodb://localhost:27017/e-learning', { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log('Connection established')
    }
})

module.exports = connection