const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const adminProfileSchema = mongoose.model('adminProfileSchema', schemas.adminProfileSchema, 'adminUsers')

const GetAdminProfile = app.get('/', (req, res) => {
    const findAdmin = {
        email: req.query.email
    }
    adminProfileSchema.findOne(findAdmin, (error, result) => {
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
module.exports = GetAdminProfile