const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/SoftUni-JS-Back-End-Cubicle';

async function dbConnect() {
    await mongoose.connect(uri);
}

module.exports = dbConnect;