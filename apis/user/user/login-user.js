const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const LoginUserProfile = app.put('/', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const findAdmin = {
        email: req.body.email
    }
    userProfileSchema.findOne(findAdmin, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                if (bcrypt.compareSync(req.body.password, result.password)) {
                    userProfileSchema.findOneAndUpdate(findAdmin, { session: session }, { new: true }, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                        }
                    })
                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(404)
            }
        }
    })
})

module.exports = LoginUserProfile