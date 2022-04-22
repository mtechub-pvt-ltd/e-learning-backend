const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const playlistSchema = mongoose.model('playlistSchema', schemas.playlistSchema, 'playlists')

const CreatePlaylist = app.post('/', (req, res) => {
    const playlist = new playlistSchema({
        name: req.body.name,
        description: req.body.description,
        videos: req.body.videos,
        images: req.body.images,
        topic: req.body.topic,
    })

    playlist.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreatePlaylist