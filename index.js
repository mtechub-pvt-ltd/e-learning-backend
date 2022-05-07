const PORT = 3000
const connection = require('./connection')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/image-uploads', express.static('image-uploads'))
app.get('/', (req, res) => {
    res.send('Working')
})

// Common Imports
const UploadImage = require('./apis/upload-image')
const UploadVideo = require('./apis/upload-video')
const SendOtpEmail = require('./apis/email-otp')


// Admin Imports
const AddImageInPlaylist = require('./apis/admin/playlist/add-image-in-playlist')
const AddVideoInPlaylist = require('./apis/admin/playlist/add-video-in-playlist')
const CreatePlaylist = require('./apis/admin/playlist/create-playlist')
const DeletePlaylist = require('./apis/admin/playlist/delete-playlist')
const GetAllPlaylists = require('./apis/admin/playlist/get-all-playlists')
const GetPlaylist = require('./apis/admin/playlist/get-playlist')
const GetTopicPlaylists = require('./apis/admin/playlist/get-topic-playlists')
const RemoveImageFromPlaylist = require('./apis/admin/playlist/remove-image-from-playlist')
const RemoveVideoFromPlaylist = require('./apis/admin/playlist/remove-video-from-playlist')

const CreateTopic = require('./apis/admin/topic/create-topic')
const DeleteTopic = require('./apis/admin/topic/delete-topic')
const GetAllTopics = require('./apis/admin/topic/get-all-topics')
const GetTopic = require('./apis/admin/topic/get-topic')
const UpdateTopic = require('./apis/admin/topic/update-topic')

const CreateAdminProfile = require('./apis/admin/user/create-admin')
const DeleteAdminProfile = require('./apis/admin/user/delete-admin')
const GetAdminProfile = require('./apis/admin/user/get-admin')
const LoginAdminProfile = require('./apis/admin/user/login-admin')
const LogoutAdminProfile = require('./apis/admin/user/logout-admin')
const UpdateAdminPassword = require('./apis/admin/user/update-admin-password')
const UpdateAdminProfile = require('./apis/admin/user/update-admin-profile')


// User Imports
const CreateSubscription = require('./apis/user/subscription/create-subscription')
const DeleteSubscription = require('./apis/user/subscription/delete-subscription')
const GetAllSubscriptions = require('./apis/user/subscription/get-all-subscriptions')
const GetUserSubscriptions = require('./apis/user/subscription/get-user-subscription')
const UpdateSubscription = require('./apis/user/subscription/update-subscription')

const CreateUser = require('./apis/user/user/create-user')
const DeleteUser = require('./apis/user/user/delete-user')
const GetUser = require('./apis/user/user/get-user')
const LoginUser = require('./apis/user/user/login-user')
const LogoutUser = require('./apis/user/user/logout-user')
const UpdateUserPassword = require('./apis/user/user/update-password')
const UpdateUserProfile = require('./apis/user/user/update-user-profile')

const AddCard = require('./apis/user/add-card')




// --------------------------------------------------------------------------


// Common API End Points
app.use('/upload-image', UploadImage)                               // checked
app.use('/upload-video', UploadVideo)                               // checked
app.use('/email-otp', SendOtpEmail)                                 // checked



// Admin API End Points
app.use('/add-image-in-playlist', AddImageInPlaylist)               // checked
app.use('/add-video-in-playlist', AddVideoInPlaylist)               // checked
app.use('/create-playlist', CreatePlaylist)                         // checked
app.use('/delete-playlist', DeletePlaylist)                         // checked
app.use('/get-all-playlists', GetAllPlaylists)                      // checked
app.use('/get-playlist', GetPlaylist)                               // checked
app.use('/get-topic-playlists', GetTopicPlaylists)
app.use('/remove-image-from-playlist', RemoveImageFromPlaylist)     // checked
app.use('/remove-video-from-playlist', RemoveVideoFromPlaylist)     // checked

app.use('/create-topic', CreateTopic)                               // checked
app.use('/delete-topic', DeleteTopic)                               // checked
app.use('/get-all-topics', GetAllTopics)                            // checked
app.use('/get-topic', GetTopic)                                     // checked
app.use('/update-topic', UpdateTopic)                               // checked

app.use('/create-admin', CreateAdminProfile)                        // checked
app.use('/delete-admin', DeleteAdminProfile)                        // checked
app.use('/get-admin', GetAdminProfile)                              // checked
app.use('/login-admin', LoginAdminProfile)                          // checked
app.use('/logout-admin', LogoutAdminProfile)                        // checked
app.use('/update-admin-password', UpdateAdminPassword)              // checked
app.use('/update-admin-profile', UpdateAdminProfile)                // checked


// User API End Points
app.use('/create-subscription', CreateSubscription)                 // checked
app.use('/delete-subscription', DeleteSubscription)                 // checked
app.use('/get-all-subscriptions', GetAllSubscriptions)              // checked
app.use('/get-user-subscriptions', GetUserSubscriptions)            // checked
app.use('/update-subscription', UpdateSubscription)                 // checked

app.use('/create-user', CreateUser)                                 // checked
app.use('/delete-user', DeleteUser)                                 // checked
app.use('/get-user', GetUser)                                       // checked
app.use('/login-user', LoginUser)                                   // checked
app.use('/logout-user', LogoutUser)                                 // checked
app.use('/update-user-password', UpdateUserPassword)                // checked
app.use('/update-user-profile', UpdateUserProfile)                  // checked

app.use('/add-card', AddCard)                                       // checked



app.listen(PORT, () => {
    console.log('Server listening at', PORT)
})
