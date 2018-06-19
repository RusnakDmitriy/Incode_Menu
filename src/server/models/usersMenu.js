const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    src: {type: String, default: "./img/food1.jpg"},
    text: {type: String, default: "Наваристый суп харчо"}
});

const menuItemSchema = new mongoose.Schema({
    id: Number,
    list: [menuSchema, menuSchema, menuSchema, menuSchema]
});

// const usersMenuSchema = mongoose.Schema({
//     id: [menuItemSchema, menuItemSchema, menuItemSchema, menuItemSchema]
// })

const usersMenuSchema = mongoose.Schema([menuItemSchema, menuItemSchema, menuItemSchema, menuItemSchema])

const usersMenu = mongoose.model('usersMenu', usersMenuSchema);

module.exports = usersMenu