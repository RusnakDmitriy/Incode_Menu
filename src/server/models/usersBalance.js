const mongoose = require('mongoose');

const usersBalanceSchema = mongoose.Schema({
    id: Number,
    data: {
        email: String,
        balance: Number
    }
});

const usersBalance = mongoose.model('usersBalance', usersBalanceSchema);

module.exports = usersBalance