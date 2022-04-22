const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const adminProfileSchema = mongoose.model('adminProfileSchema', schemas.adminProfileSchema, 'adminUsers')

const CreateAdminProfile = app.post('/', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const admin = new adminProfileSchema({
        image: req.body.image,
        fullName: req.body.fullName,
        dob: req.body.dob,
        jobTitle: req.body.jobTitle,
        email: req.body.email,
        password: hashedPassword,
        session: session
    })

    admin.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateAdminProfile