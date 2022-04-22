const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const topicSchema = mongoose.model('topicSchema', schemas.topicSchema, 'topics')

const DeleteTopic = app.delete('/', (req, res) => {
    topicSchema.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = DeleteTopic