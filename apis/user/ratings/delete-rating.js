const { ratingModel } = require('../../../schemas')
const express = require('express')
const app = express()

const DeleteRating = app.delete('/', (req, res) => {
    ratingModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = DeleteRating