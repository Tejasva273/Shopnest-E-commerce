const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'suxkj0de',
  api_key: process.env.CLOUDINARY_API_KEY || '555455985311638',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'ktBnCohiqLPF7ytydlzCiJyjR7g'
});

module.exports = cloudinary;
