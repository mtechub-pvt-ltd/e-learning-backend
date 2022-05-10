const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')

const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')


const GetUserSubscriptions = app.get('/', (req, res) => {
    userProfileSchema.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
        .select('subscriptions')
        .populate({
            path: 'subscriptions',
            populate:
                [{
                    path: 'playlist'
                }, {
                    path: 'topic'
                },
                ],
            select: ['totalPrice', 'subNo', 'topic', 'subscriptionTenure', 'playlist']
        })
})
module.exports = GetUserSubscriptions