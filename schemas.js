const mongoose = require('mongoose')

const adminProfileSchema = mongoose.Schema({
    image: String,
    fullName: String,
    dob: Date,
    jobTitle: String,
    email: String,
    password: String,
    session: String,
    totalEarnings: Number,
})
const paymentDetailSchema = mongoose.Schema({
    cardNumber: Number,
    expiryMonth: Number,
    expiryYear: Number,
    cvc: Number
})



const topicSchema = mongoose.Schema({
    name: String,
    description: String,
    images: [String],
    price: Number,
})

const subscriptionTenureSchema = mongoose.Schema({
    tenureType: { type: String, enum: ['Daily', 'Monthly', 'Yearly'] },
    startDate: Date,
    endDate: Date,
})


const subscriptionSchema = mongoose.Schema({
    topic: mongoose.Types.ObjectId,
    subscriptionTenure: subscriptionTenureSchema,
    totalPrice: Number,
    stripeData: mongoose.Schema.Types.Mixed
})

const subscriptionModel = mongoose.model('subscriptions', subscriptionSchema)

const userProfileSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    session: String,
    paymentDetails: [paymentDetailSchema],
    subscriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subscriptions'
    }]
})

const playlistSchema = mongoose.Schema({
    name: String,
    description: String,
    videos: [String],
    images: [String],
    topic: mongoose.Types.ObjectId,
})

module.exports = {
    adminProfileSchema,
    userProfileSchema,
    paymentDetailSchema,
    topicSchema,
    subscriptionSchema,
    playlistSchema,
}