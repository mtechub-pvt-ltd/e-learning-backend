const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const GetUserProfile = app.get('/', (req, res) => {
    const findUser = {
        email: req.query.email
    }
    userProfileSchema.findOne(findUser, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                res.send(result)
            } else {
                res.sendStatus(404)
            }
        }
    })
})
module.exports = GetUserProfile