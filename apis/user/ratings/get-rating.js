const { ratingModel } = require('../../../schemas')
const express = require('express')
const app = express()

const GetRating = app.get('/', (req, res) => {
    ratingModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetRating