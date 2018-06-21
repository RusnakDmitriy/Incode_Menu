const mongoose = require('mongoose');

const adminSelectMenuSchema = mongoose.Schema(
    {
        id: Number,
        list: [
            {dish: [
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                     },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    }
                ]},
            {dish: [
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    }
                ]},
            {dish: [
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    }
                ]},
            {dish: [
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    },
                    {
                        src: {type: String, default: "./img/food1.jpg"},
                        text: {type: String, default: "Наваристый суп харчо"}
                    }
                ]}
        ]
    }
);

const adminSelectMenu = mongoose.model('adminSelectMenu', adminSelectMenuSchema);

module.exports = adminSelectMenu