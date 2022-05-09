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
    subNo: Number,
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topics'
    },
    subscriptionTenure: subscriptionTenureSchema,
    totalPrice: Number,
    stripeData: mongoose.Schema.Types.Mixed
})

const subscriptionModel = mongoose.model('subscriptions', subscriptionSchema)
const topicsModel = mongoose.model('topics', topicSchema)

const userProfileSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    session: String,
    dob: Date,
    address: String,
    paymentDetails: [paymentDetailSchema],
    subscriptions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subscriptions'
    }]
})

const videoSchema = mongoose.Schema({
    path: String,
    duration: String
})

const playlistSchema = mongoose.Schema({
    name: String,
    description: String,
    videos: [videoSchema],
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