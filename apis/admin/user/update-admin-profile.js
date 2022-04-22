const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const adminProfileSchema = mongoose.model('adminProfileSchema', schemas.adminProfileSchema, 'adminUsers')

const UpdateAdminProfile = app.put('/', (req, res) => {
    const findAdmin = {
        email: req.body.email
    }
    const updateData = {
        image: req.body.image,
        fullName: req.body.fullName,
        dob: req.body.dob,
        jobTitle: req.body.jobTitle,
    }
    const options = {
        new: true
    }
    adminProfileSchema.findOneAndUpdate(findAdmin, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateAdminProfile