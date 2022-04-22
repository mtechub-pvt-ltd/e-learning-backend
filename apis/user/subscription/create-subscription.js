const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')
const dotenv = require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_STRIPE_KEY)

const subscriptionSchema = mongoose.model('subscriptionSchema', schemas.subscriptionSchema, 'subscriptions')
const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const CreateSubscription = app.post('/', async (req, res) => {
    const options = {
        new: true
    }
    const token = await stripe.tokens.create({
        card: {
            number: req.body.cardDetails.cardNumber,
            exp_month: req.body.cardDetails.expiryMonth,
            exp_year: req.body.cardDetails.expiryYear,
            cvc: req.body.cardDetails.cvc,
        },
    })
    stripe.charges.create({
        amount: req.body.totalPrice,
        currency: 'usd',
        source: token.id,
        description: 'Some Description For The Transaction',
    }).then((charge) => {
        const subscriptionObject = new subscriptionSchema({
            topic: req.body.topic,
            subscriptionTenure: req.body.subscriptionTenure,
            totalPrice: req.body.totalPrice,
            stripeData: charge
        })
        subscriptionObject.save((error, result) => {
            if (error) {
                res.send(error)
            } else {
                const pushSubscription = {
                    $push: {
                        subscriptions: result._id
                    }
                }
                userProfileSchema.findByIdAndUpdate(req.body._id, pushSubscription, options, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }
        })
    }).catch(error => {
        // res.status(500).send(error)
        res.status(500).send('Transaction failed, try some other time.')
    })

})
module.exports = CreateSubscription