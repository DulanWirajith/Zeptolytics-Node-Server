// Monthly Sales
const mongoose = require('mongoose');

const ms_schema = mongoose.Schema({
    data1: { type: Number },
    data2: { type: Number },
    data3: { type: Number },
    xaxis: { type: String }
});

module.exports = mongoose.model('ms', ms_schema);