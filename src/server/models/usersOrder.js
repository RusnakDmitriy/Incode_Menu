const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    src: String,
    text: String
});
//
// const menuItemSchema = new mongoose.Schema({
//     id: Number,
//     list: [menuSchema, menuSchema, menuSchema, menuSchema]
// });

const usersOrderSchema = mongoose.Schema({
    list: [menuSchema, menuSchema, menuSchema, menuSchema],
    id: Number
});

const usersOrder = mongoose.model('usersOrder', usersOrderSchema);

module.exports = usersOrder