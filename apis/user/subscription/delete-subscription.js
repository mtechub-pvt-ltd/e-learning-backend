const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const subscriptionSchema = mongoose.model('subscriptionSchema', schemas.subscriptionSchema, 'subscriptions')
const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')


const DeleteSubscription = app.delete('/', (req, res) => {
    const updateData = {
        $pull: {
            subscriptions: req.body._id
        }
    }
    const options = {
        new: true
    }
    userProfileSchema.findByIdAndUpdate(req.body.user_id, updateData, options, (error, userResult) => {
        if (error) {
            res.send(error)
        } else {
            subscriptionSchema.findByIdAndDelete(req.body._id, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(userResult)
                }
            })
        }
    })

})
module.exports = DeleteSubscription