const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const CreateUserProfile = app.post('/', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    const user = new userProfileSchema({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
        session: session,
        dob: null,
        address: null
    })

    user.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateUserProfile