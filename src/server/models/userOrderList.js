const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: Number,
    date: Date,
    menuNumber: Number,
    dishes: ["Наваристый суп харчо",
            "Картофель отварной молодой",
            "Биток Хмельницкий",
            "Свежий салат из капусты с огурцом"]
});


const userOrderListSchema = mongoose.Schema({
    id: Number,
    email: String,
    order: [orderSchema]
});

const userOrderList = mongoose.model('userOrderList', userOrderListSchema);

module.exports = userOrderList