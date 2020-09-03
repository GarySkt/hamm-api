require('dotenv').config()

module.exports = {
    APP_NAME: process.env.APP_NAME || 'NodeJS',
    APP_DEBUG: process.env.APP_DEBUG || false,
    APP_URL: process.env.APP_URL || 'http://localhost',
    APP_PORT: process.env.APP_PORT || 4000,

    DB_URI: process.env.DB_URI || '',

    JWT_SECRET: process.env.JWT_SECRET || '',
};