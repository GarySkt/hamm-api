const jwt = require('jsonwebtoken');
const config = require('../../config');
const { User } = require('../models');

auth = async function ({ req }) {
    const token = req.headers.authorization || null;
    if (token === null) return { user: undefined };

    const user = await getUser(token);
    return { user };
};

async function getUser(token) {
    try {
        token = token.split(' ')[1];
        const payload = jwt.verify(token, config.JWT_SECRET);
        const user = await User.findById(payload.id);

        return user;
    } catch (err) {
        return undefined;
    }
}

module.exports = {
    auth,
};