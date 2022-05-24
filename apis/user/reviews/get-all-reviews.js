const { reviewModel } = require('../../../schemas')
const express = require('express')
const app = express()

const GetAllReviews = app.get('/', (req, res) => {
    reviewModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetAllReviews