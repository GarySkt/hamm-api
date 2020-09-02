require('dotenv').config()

module.exports = {
    APP_NAME: process.env.APP_NAME || 'NodeJS',
    APP_DEBUG: process.env.APP_DEBUG || false,

    DB_URI: process.env.DB_URI || '',

    JWT_SECRET: process.env.JWT_SECRET || '',
};