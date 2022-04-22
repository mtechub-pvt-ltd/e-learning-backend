const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

const multerMiddleWareStorage = multer.diskStorage({
    destination: (req, res, callBack) => {
        callBack(null, 'video-uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname))
    }
})
const fileFilter = (req, file, callBack) => {
    if (!file.mimetype.match(/\.(mp4|MPEG-4|mkv)$/)) {
        callBack(null, true)
    } else {
        callBack(null, false)
    }
}
const upload = multer({
    storage: multerMiddleWareStorage,
    limits: {
        fileSize: 10000000 // 10000000 Bytes = 10 MB 
    },
    fileFilter: fileFilter,
})

const UploadVideo = app.post('/', upload.single('video'), (req, res) => {
    try {
        const videoUpload = req.file.path
        res.status(200).send(videoUpload)
    } catch (error) {
        res.send(error)
    }
})
module.exports = UploadVideo
