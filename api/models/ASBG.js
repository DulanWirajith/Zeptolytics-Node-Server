// Annual Sales By Gender
const mongoose = require('mongoose');

const asbg_schema = mongoose.Schema({
    data1: { type: Number },
    data2: { type: Number },
    xaxis: { type: String }
});

module.exports = mongoose.model('asbg', asbg_schema);