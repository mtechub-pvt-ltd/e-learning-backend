const express = require('express')
const mongoose = require('mongoose')
const app = express()
const schemas = require('../../../schemas')

const adminProfileSchema = mongoose.model('adminProfileSchema', schemas.adminProfileSchema, 'adminUsers')

const DeleteAdminProfile = app.delete('/', (req, res) => {
    const deleteDriver = {
        email: req.body.email,
    }
    adminProfileSchema.findOneAndDelete(deleteDriver, (error, docs) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = DeleteAdminProfile