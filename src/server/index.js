const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const UsersMenu  =require('./models/usersMenu');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/usersMenu');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const db = mongoose.connection;

db.on('error', err=>{
    console.log('error connection', err)
});

db.once('open', ()=>{
    console.log('we are connected');
    // const usersMenu = new UsersMenu({id: 1});
    // console.log(usersMenu);
    // usersMenu.save((err, createdMenu)=>{
    //     console.log(createdMenu)
    // })
})

app.get('/api', (req, res)=>{
    return UsersMenu.find(function (err, menu) {
        if (!err) {
            return res.send(menu);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

app.post('/api/menu', (req, res)=>{
    let menu = new UsersMenu({
        id: req.body.id,
        list: [req.body.list[0], req.body.list[1], req.body.list[2], req.body.list[3]]
    });
    menu.save(function (err) {
        if (!err) {
            console.log("menu created");
            return res.send({ status: 'OK', menu:menu });
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
})

app.listen(8000, ()=>{
    console.log('API created')
})