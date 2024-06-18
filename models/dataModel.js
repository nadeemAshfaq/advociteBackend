const mongoose = require('mongoose');

const inputSchema = new mongoose.Schema({
    Title: {
        type: String,
    },
    Author: {
        type: String,
    },
    Journal: {
        type: String,
    },
    Abbrevition: {
        type: String,
    },
    Valume: {
        type: String,
    },
    PageFrom: {
        type: Number,
    },
    PageTo: {
        type: Number,
    },
    CateGory: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Data', inputSchema);
