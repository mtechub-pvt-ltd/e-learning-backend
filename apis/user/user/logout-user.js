const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const LogoutUserProfile = app.put('/', (req, res) => {
    const findUser = {
        email: req.body.email
    }
    const updateData = {
        session: null,
    }
    const options = {
        new: true
    }
    userProfileSchema.findOneAndUpdate(findUser, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = LogoutUserProfile