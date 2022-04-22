const express = require('express')
const mongoose = require('mongoose')
const app = express()
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const DeleteUserProfile = app.delete('/', (req, res) => {
    const deleteUser = {
        email: req.body.email,
    }
    userProfileSchema.findOneAndDelete(deleteUser, (error, docs) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = DeleteUserProfile