const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const UpdateUserProfile = app.put('/', (req, res) => {
    const findAdmin = {
        email: req.body.email
    }
    const updateData = {
        image: req.body.image,
        fullName: req.body.fullName,
        dob: req.body.dob,
        address: req.body.address
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
module.exports = UpdateUserProfile