const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const topicSchema = mongoose.model('topicSchema', schemas.topicSchema, 'topics')

const UpdateTopic = app.put('/', (req, res) => {
    const updateData = {
        name: req.body.name,
        description: req.body.description,
        images: req.body.images,
        price: req.body.price,
    }
    const options = {
        new: true
    }
    topicSchema.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateTopic