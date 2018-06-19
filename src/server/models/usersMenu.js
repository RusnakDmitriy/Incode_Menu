const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    src: {type: String, default: "./img/food1.jpg"},
    text: {type: String, default: "Наваристый суп харчо"}
});

const usersMenuSchema = mongoose.Schema({
    id: Number,
    list: [menuSchema, menuSchema, menuSchema, menuSchema]
});

const usersMenu = mongoose.model('usersMenu', usersMenuSchema);

module.exports = usersMenu