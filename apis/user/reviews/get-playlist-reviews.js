const { reviewModel } = require('../../../schemas')
const express = require('express')
const app = express()

const GetPlaylistReviews = app.get('/', (req, res) => {
    reviewModel.find({ playlist_id: req.query.playlist_id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetPlaylistReviews