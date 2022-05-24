const { ratingModel } = require('../../../schemas')
const express = require('express')
const app = express()

const UpdateRating = app.put('/', (req, res) => {
    const updateData = {
        stars: req.body.stars,
        comments: req.body.comments,
    }
    ratingModel.findByIdAndUpdate(req.body._id, updateData, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = UpdateRating