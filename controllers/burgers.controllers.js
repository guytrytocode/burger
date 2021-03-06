const express = require('express');
const orm = require('../config/orm.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
    orm.selectAll()
        .then(burgers => {
            console.log(burgers);
            res.render('index',{ data: burgers});
        });
});

router.post('/burgers/create', (req,res) => {
    orm.insertOne(req.body.data)
        .then(results => {
            res.send(results);
        })
        .catch(err => console.error(err));
});

router.put('/burgers/update/:id', (req,res) => {
    const burgerID = req.params.id;
    orm.updateOne(burgerID, true)
        .then(results => {
            res.send(results);
        })
        .catch(err => console.error(err));
});
module.exports = router;