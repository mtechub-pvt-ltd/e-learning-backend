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
    tenureType: { type: String, enum: ['Daily', 'Monthly', 'Quarterly', 'Yearly'] },
    startDate: Date,
    endDate: Date,
})


const subscriptionSchema = mongoose.Schema({
    subNo: Number,
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topics'
    },
    playlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'playlists'
    },
    subscriptionTenure: subscriptionTenureSchema,
    totalPrice: Number,
    stripeData: mongoose.Schema.Types.Mixed
})



const userProfileSchema = mongoose.Schema({
    image: String,
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
    title: String,
    path: String,
    duration: String
})

const reviewSchema = mongoose.Schema({
    playlist_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'playlists'
    },
    image: String,
    review: String,
})

const ratingSchema = mongoose.Schema({
    playlist_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'playlists'
    },
    stars: Number,
    comments: String,
})

const playlistSchema = mongoose.Schema({
    name: String,
    description: String,
    videos: [videoSchema],
    images: [String],
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topics'
    },
})
const playlistModel = mongoose.model('playlists', playlistSchema)
const subscriptionModel = mongoose.model('subscriptions', subscriptionSchema)
const topicsModel = mongoose.model('topics', topicSchema)
const ratingModel = mongoose.model('ratings', ratingSchema, 'ratings')
const reviewModel = mongoose.model('reviews', reviewSchema, 'reviews')

module.exports = {
    adminProfileSchema,
    userProfileSchema,
    paymentDetailSchema,
    topicSchema,
    subscriptionSchema,
    playlistSchema,
    ratingModel,
    reviewModel,
}