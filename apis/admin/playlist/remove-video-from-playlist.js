const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const playlistSchema = mongoose.model('playlistSchema', schemas.playlistSchema, 'playlists')

const RemoveVideoFromPlaylist = app.delete('/', (req, res) => {
    const updateData = {
        $pull: {
            videos: req.body.video      // path of video
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
module.exports = RemoveVideoFromPlaylist