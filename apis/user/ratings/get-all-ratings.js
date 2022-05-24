const { ratingModel } = require('../../../schemas')
const express = require('express')
const app = express()

const GetAllRatings = app.get('/', (req, res) => {
    ratingModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetAllRatings