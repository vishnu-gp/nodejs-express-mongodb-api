const mongoose = require('mongoose')

const tabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dataPoints: {
        type: [{
            dataType: { type: String, required: true },
            label: { type: String },
            description: { String },
            options: { type: Array },
        }],
    },
})

module.exports = mongoose.model('Tab', tabSchema)