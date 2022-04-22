const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const topicSchema = mongoose.model('topicSchema', schemas.topicSchema, 'topics')

const CreateTopic = app.post('/', (req, res) => {
    const topic = new topicSchema({
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
    })

    topic.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateTopic