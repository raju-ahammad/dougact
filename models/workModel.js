const mongoose = require('mongoose')

const workSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [false, "please enter title!"],
        trim: true
    },
    image : {
        type: String,
        required: [false, "please enter image!"],
        trim: true
    },
    video: {
        type: String,
        required: [false, "please enter video link"],
        trim: true
    },
    description: {
        type: String,
        required: [false, "please enter description"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Works", workSchema);