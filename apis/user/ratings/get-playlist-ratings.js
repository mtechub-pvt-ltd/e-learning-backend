const { ratingModel } = require('../../../schemas')
const express = require('express')
const app = express()

const GetPlaylistRatings = app.get('/', (req, res) => {
    ratingModel.find({ playlist_id: req.query.playlist_id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = GetPlaylistRatings