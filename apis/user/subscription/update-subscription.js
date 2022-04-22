const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')
const dotenv = require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_STRIPE_KEY)

const subscriptionSchema = mongoose.model('subscriptionSchema', schemas.subscriptionSchema, 'subscriptions')


const UpdateSubscription = app.put('/', (req, res) => {
    const options = {
        new: true
    }
    stripe.charges.create({
        amount: req.body.totalPrice,
        currency: 'usd',
        source: token.id,
        description: 'Some Description For The Transaction',
    }).then((charge) => {
        const updateData = {
            topic: req.body.topic,
            subscriptionTenure: req.body.subscriptionTenure,
            totalPrice: req.body.totalPrice,
            stripeData: charge
        }
        subscriptionSchema.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send(result)
            }
        })
    }).catch(error => {
        res.status(500).send('Transaction failed, try some other time.')
    })


})
module.exports = UpdateSubscription