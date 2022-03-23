const mongoose = require('mongoose');
var Kategoria = require('../models/kategoria');

const Schema = mongoose.Schema;

const hirdetesSchema = new Schema({
    _id: Number,
    kategoria: {
        type: Number,
        ref: Kategoria
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

module.exports = mongoose.model('Hirdetes', hirdetesSchema, 'hirdetesek');