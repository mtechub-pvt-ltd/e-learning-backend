const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const playlistSchema = mongoose.model('playlistSchema', schemas.playlistSchema, 'playlists')

const AddVideoInPlaylist = app.put('/', (req, res) => {
    const updateData = {
        $push: {
            videos: req.body.video      // path and duration of video, js object
        }
    }
    const options = {
        new: true
    }
    playlistSchema.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = AddVideoInPlaylist