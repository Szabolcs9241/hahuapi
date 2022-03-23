const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30
    },
    cim: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100
    },
    leiras: {
        type: String,
        maxlength: 3000
    },
    hirdetesDatuma: {
        type: Date,
        default: Date.now()
    },
    serulesmentes: {
        type: Boolean,
    },
    arFt: {
        type: Number,
        required: true
    },
    kepUrl: {
        type: String,
    }
});

module.exports = mongoose.model('Kategoria', hirdetesSchema, 'kategoriak');