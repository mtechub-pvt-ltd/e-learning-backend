const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const playlistSchema = mongoose.model('playlistSchema', schemas.playlistSchema, 'playlists')

const AddImageInPlaylist = app.put('/', (req, res) => {
    const updateData = {
        $push: {
            images: req.body.image      // path of image
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
module.exports = AddImageInPlaylist