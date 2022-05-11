const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const SendOtpEmail = app.post('/', (req, res) => {
    const otpCode = Math.floor(1000 + Math.random() * 9000)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'appelearning89@gmail.com',
            pass: 'appelearning89appelearning89'
        }
    })
    const mailOptions = {
        from: 'appelearning89@gmail.com',
        to: req.body.email,
        subject: `E-Learning`,
        text: `
${otpCode} is your verification code for E-Learning.
                
Thank you for choosing our platform.
                
Regards,
E-Learning Management
                `,
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error)
        } else {
            if (info) {
                res.send('' + otpCode)
            }
        }
    })
})

module.exports = SendOtpEmail