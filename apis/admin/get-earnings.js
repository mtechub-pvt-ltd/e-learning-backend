const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../schemas')

const subscriptionSchema = mongoose.model('subscriptionSchema', schemas.subscriptionSchema, 'subscriptions')


const GetEarnings = app.get('/', (req, res) => {
    const startDate = new Date(req.query.startDate)
    const endDate = new Date(req.query.endDate)
    subscriptionSchema.find({ 'subscriptionTenure.startDate': { $gte: startDate } && { $lt: endDate } }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            let total = 0
            result.map(sub => {
                total += sub.totalPrice
            })
            res.send(total/100 + '')
        }
    })
})
module.exports = GetEarnings