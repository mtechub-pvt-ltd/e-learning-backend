const express = require('express')
const mongoose = require('mongoose')
const app = express()
const schemas = require('../../schemas')

const paymentDetailSchema = mongoose.model('paymentDetailSchema', schemas.paymentDetailSchema, 'users')
const userProfileSchema = mongoose.model('userProfileSchema', schemas.userProfileSchema, 'users')

const AddCard = app.put('/', (req, res) => {
    const findUser = {
        email: req.body.email
    }
    const card = new paymentDetailSchema({
        cardNumber: req.body.cardNumber,
        expiryMonth: req.body.expiryMonth,
        expiryYear: req.body.expiryYear,
        cvc: req.body.cvc,
    })
    const updateData = {
        $push: {
            paymentDetails: card
        }
    }
    const options = {
        new: true
    }
    userProfileSchema.findOneAndUpdate(findUser, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = AddCard