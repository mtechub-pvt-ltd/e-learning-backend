const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const playlistSchema = mongoose.model('playlistSchema', schemas.playlistSchema, 'playlists')

const GetTopicPlaylists = app.get('/', (req, res) => {
    playlistSchema.find({ topic: req.query._id }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetTopicPlaylists