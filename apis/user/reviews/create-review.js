const { reviewModel } = require('../../../schemas')
const express = require('express')
const app = express()

const CreateReview = app.post('/', (req, res) => {
    const rating = new reviewModel({
        playlist_id: req.body.playlist_id,
        image: req.body.image,
        review: req.body.review,
    })
    rating.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = CreateReview