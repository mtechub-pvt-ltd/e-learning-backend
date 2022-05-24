const { reviewModel } = require('../../../schemas')
const express = require('express')
const app = express()

const UpdateReview = app.put('/', (req, res) => {
    const updateData = {
        image: req.body.image,
        review: req.body.review,
    }
    reviewModel.findByIdAndUpdate(req.body._id, updateData, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = UpdateReview