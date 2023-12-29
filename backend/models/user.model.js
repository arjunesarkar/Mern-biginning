const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {
        type: String,
        unique: true
    }
}, { timestamps: true });


const User = mongoose.model('user', userSchema);

module.exports = User;
