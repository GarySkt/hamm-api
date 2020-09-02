const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../../config');

const User = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
});

User.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 8);
    next();
});

User.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new AuthenticationError('Email or password are wrong');

    const result = await bcrypt.compare(password, user.password);
    if (!result) throw new AuthenticationError('Email or password are wrong');

    const token = jwt.sign({ id: user.id }, config.JWT_SECRET);

    return { token };
};

User.methods.signUp = async function () {
    await this.save();

    const token = jwt.sign({ id: this.id }, config.JWT_SECRET);

    return { token };
}

module.exports = mongoose.model('User', User);