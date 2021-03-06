const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const UsersMenu  =require('./models/usersMenu');
const UserOrderList = require('./models/userOrderList');
const AdminSelectMenu = require('./models/adminSelectMenu');
const UsersOrder = require('./models/usersOrder');
const UsersBalance = require('./models/usersBalance');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/usersMenu');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const db = mongoose.connection;

db.on('error', err=>{
    console.log('error connection', err)
});

db.once('open', ()=>{
    console.log('we are connected');
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
    let menu = new UsersMenu(
        [req.body[0], req.body[1], req.body[2], req.body[3]]
        // id: req.body.id,
        // list: [req.body.list[0], req.body.list[1], req.body.list[2], req.body.list[3]]
    );
    menu.save(function (err) {
        if (!err) {
            console.log("menu created");
            return res.send({ status: 'OK', menu:menu });
        } else {
            console.log(err);
            if(err.name == 'ValidationError'){
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

app.delete('/api/menu/:id', function (req, res){
    return UsersMenu.findById(req.params.id, function (err, menu) {
        if(!menu) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return menu.remove(function (err) {
            if (!err) {
                console.log("menu removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

app.put('/api/menu/:id', function (req, res){
    return UsersMenu.findByIdAndUpdate(req.params.id, req.body, function (err, menu) {
        console.log(err)
        if(!menu) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        //menu.id = req.body;

        return menu.save(function (err) {
            if (!err) {
                console.log("menu updated");
                return res.send({ status: 'OK', menu:menu });
            } else {
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
    });
});




app.get('/api/userOrderList', (req, res)=>{
    return UserOrderList.find(function (err, orderList) {
        if (!err) {
            return res.send(orderList);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});

app.get('/api/userOrderList/:email', (req, res)=>{
    return UserOrderList.find(function (err, orderList) {
        if (!err) {
            const filtratedOrderList = orderList.filter((item)=> item.email===req.params.email);
            return res.send(filtratedOrderList);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});

app.post('/api/userOrderList/user', (req, res)=>{
    let orderList = new UserOrderList({id: req.body.id, email: req.body.email, order: req.body.order});
    orderList.save(function (err) {
        if (!err) {
            console.log("menu created");
            return res.send({ status: 'OK', orderList:orderList });
        } else {
            console.log(err);
            if(err.name == 'ValidationError'){
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});

app.delete('/api/userOrderList/:id', function (req, res){
    return UserOrderList.findById(req.params.id, function (err, orderList) {
        if(!orderList) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return orderList.remove(function (err) {
            if (!err) {
                console.log("orderList removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

app.put('/api/userOrderList/user/:id', function (req, res){
     return UserOrderList.findByIdAndUpdate(req.params.id, {$push:{"order": req.body}}, {new: true, runValidators: true}, function (err, orderList) {
         if(!orderList) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        return orderList.save(function (err) {
            if (!err) {
                console.log("menu updated");
                return res.send({ status: 'OK', orderList:orderList });
            } else {
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
    });
});



app.get('/api/adminSelectMenu', (req, res)=>{
    return AdminSelectMenu.find(function (err, adminMenu) {
        if (!err) {
            return res.send(adminMenu);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});

app.post('/api/adminSelectMenu/menu', (req, res)=>{
    let adminMenu = new AdminSelectMenu(req.body);
    adminMenu.save(function (err) {
        if (!err) {
            console.log("adminMenu created");
            return res.send({ status: 'OK', adminMenu:adminMenu });
        } else {
            console.log(err);
            if(err.name == 'ValidationError'){
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});

app.delete('/api/adminSelectMenu/menu/:id', function (req, res){
    return AdminSelectMenu.findById(req.params.id, function (err, adminMenu) {
        if(!adminMenu) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return adminMenu.remove(function (err) {
            if (!err) {
                console.log("orderList removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});



app.get('/api/getUsersOrder', (req, res)=>{
    return UsersOrder.find(function (err, usersOrder) {
        if (!err) {
            return res.send(usersOrder);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});

app.post('/api/usersOrder', (req, res)=>{
    console.log(req.body)
    let usersOrder = new UsersOrder({id: req.body.id, list: req.body.list});
    usersOrder.save(function (err) {
        if (!err) {
            console.log("order is added");
            return res.send({ status: 'OK', usersOrder:usersOrder });
        } else {
            if(err.name == 'ValidationError'){
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});


app.get('/api/usersBalance', (req, res)=>{
    return UsersBalance.find(function (err, usersBalance) {
        if (!err) {
            return res.send(usersBalance);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});

app.post('/api/usersBalance/setData', (req, res)=>{
    let usersBalance = new UsersBalance({id: req.body.id, data: req.body.data});
    usersBalance.save(function (err) {
        if (!err) {
            console.log("user added");
            return res.send({ status: 'OK', usersBalance:usersBalance });
        } else {
            console.log(err);
            if(err.name == 'ValidationError'){
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});

app.delete('/api/usersBalance/:id', function (req, res){
    return UsersBalance.findById(req.params.id, function (err, usersBalance) {
        if(!usersBalance) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }
        return usersBalance.remove(function (err) {
            if (!err) {
                console.log("user removed");
                return res.send({ status: 'OK' });
            } else {
                res.statusCode = 500;
                console.log('Internal error(%d): %s',res.statusCode,err.message);
                return res.send({ error: 'Server error' });
            }
        });
    });
});

app.put('/api/usersBalance/change/:id', function (req, res){
    return UsersBalance.findByIdAndUpdate(req.params.id, {$set:{"data": req.body}}, {new: true, runValidators: true}, function (err, usersBalance) {
        if(!usersBalance) {
            res.statusCode = 404;
            return res.send({ error: 'Not found' });
        }

        return usersBalance.save(function (err) {
            if (!err) {
                console.log("user balance is updated");
                return res.send({ status: 'OK', usersBalance:usersBalance });
            } else {
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
    });
});

app.get('/api/usersBalance/:email', (req, res)=>{
    return UsersBalance.find(function (err, usersBalance) {
        if (!err) {
            const filtratedusersBalance = usersBalance.filter((item)=> (item.data.email===req.params.email));
            return res.send(filtratedusersBalance);
        } else {
            res.statusCode = 500;
            console.log('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});


app.listen(3017, ()=>{
    console.log('API created')
})