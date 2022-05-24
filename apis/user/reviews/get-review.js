const { reviewModel } = require('../../../schemas')
const express = require('express')
const app = express()

const GetReview = app.get('/', (req, res) => {
    reviewModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetReview