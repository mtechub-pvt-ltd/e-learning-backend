const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const UpdateUserPassword = app.put('/', (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const findAdmin = {
        email: req.body.email
    }
    const updateData = {
        password: hashedPassword,
    }
    const options = {
        new: true
    }
    userProfileSchema.findOneAndUpdate(findAdmin, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateUserPassword