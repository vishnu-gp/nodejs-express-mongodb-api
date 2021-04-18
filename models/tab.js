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
            dataType: {
                type: String,
                enum: ['selection', 'text', 'number', 'date'],
                required: true
            },
            label: { type: String },
            description: { type: String },
            options: { type: Array },
            placeholder: { type: String }
        }],
    },
})

module.exports = mongoose.model('Tab', tabSchema)