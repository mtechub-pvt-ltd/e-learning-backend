const { reviewModel } = require('../../../schemas')
const express = require('express')
const app = express()

const DeleteReview = app.delete('/', (req, res) => {
    reviewModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = DeleteReview