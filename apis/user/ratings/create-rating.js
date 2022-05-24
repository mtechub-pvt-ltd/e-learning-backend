const { ratingModel } = require('../../../schemas')
const express = require('express')
const app = express()

const CreateRating = app.post('/', (req, res) => {
    const rating = new ratingModel({
        playlist_id: req.body.playlist_id,
        stars: req.body.stars,
        comments: req.body.comments,
    })
    rating.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = CreateRating