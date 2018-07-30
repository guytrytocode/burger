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
    res.send(req.body);
})
module.exports = router;