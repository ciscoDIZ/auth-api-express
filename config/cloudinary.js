const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'mrdb1010100',
    api_key: '848423118256696',
    api_secret: 'G7AYOP0Yi4MpNjN_Y8JVVaqmOug',
    secure: true
});

module.exports = cloudinary;