// Monthly Sales Growth
const mongoose = require('mongoose');

const msg_schema = mongoose.Schema({
    data: { type: Number },
    xaxis: { type: String }
});

module.exports = mongoose.model('msg', msg_schema);