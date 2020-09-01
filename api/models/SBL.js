// Sales by Location
const mongoose = require('mongoose');

const sbl_schema = mongoose.Schema({
    label: { type: String },
    series: { type: Number }
});

module.exports = mongoose.model('sbl', sbl_schema);