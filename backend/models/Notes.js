const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true,
        unique: true
    },
    tag:{
        type: String,
        default : "General"
    },
    Date:{
        type: Date,
        default: Date.now
    },

  });

  module.exports = mongoose.model('notes',NotesSchema);