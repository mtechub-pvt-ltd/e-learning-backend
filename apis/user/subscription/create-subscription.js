const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bcrypt = require('bcrypt')
const schemas = require('../../../schemas')
const dotenv = require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_STRIPE_KEY)

const subscriptionSchema = mongoose.model('subscriptionSchema', schemas.subscriptionSchema, 'subscriptions')
const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')
const topicSchema = mongoose.model('topicSchema', schemas.topicSchema, 'topics')

const CreateSubscription = app.post('/', async (req, res) => {
    const options = {
        new: true
    }
    let priceForTenure = 0
    const subNo = Math.floor(100000 + Math.random() * 900000)
    // const data = req.body
    // console.log(req.body)
    topicSchema.findById(req.body.topic, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            if (req.body.subscriptionTenure.tenureType == 'Daily') {
                priceForTenure = result.price
            } else if (req.body.subscriptionTenure.tenureType == 'Monthly') {
                priceForTenure = result.price * 30
            } else if (req.body.subscriptionTenure.tenureType == 'Yearly') {
                priceForTenure = result.price * 365
            } else {
                res.status(403).send('Wrong Subscription Tenure Selected')
                return
            }
            // res.send({
            //     ...data,
            //     totalPrice: priceForTenure
            // })
        }
    })
    const token = await stripe.tokens.create({
        card: {
            number: req.body.cardDetails.cardNumber,
            exp_month: req.body.cardDetails.expiryMonth,
            exp_year: req.body.cardDetails.expiryYear,
            cvc: req.body.cardDetails.cvc,
        },
    })
    stripe.charges.create({
        amount: priceForTenure,
        currency: 'usd',
        source: token.id,
        description: 'Some Description For The Transaction',
    }).then((charge) => {
        const subscriptionObject = new subscriptionSchema({
            subNo: subNo,
            topic: req.body.topic,
            subscriptionTenure: req.body.subscriptionTenure,
            totalPrice: priceForTenure,
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
                        if (result) {
                            res.send(`You've been successfully subscribed`)
                            // res.send(result)
                        } else {
                            res.status(404).send('User not found')
                        }
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