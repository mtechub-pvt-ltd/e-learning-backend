const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const adminProfileSchema = mongoose.model('adminProfileSchema', schemas.adminProfileSchema, 'adminUsers')

const LogoutAdminProfile = app.put('/', (req, res) => {
    const findAdmin = {
        email: req.body.email
    }
    const updateData = {
        session: null,
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

module.exports = LogoutAdminProfile