var express = require('express');
var router = express.Router();
var data = require('../db.json');
var request = require("request");



/* GET create page. */
router.get('/create', function (req, res, next) {


    res.render('create', { title: "create" });

    console.log(req.body);

});



/* POST create page. */
router.post('/', function (req, res, next) {

    let obj = {
        "title": req.body.title,
        "author": req.body.author,
        "timedate": req.body.timedate,
        "content": req.body.content,
        "image": req.body.image,
    }

    request.post({
        url: "http://localhost:8000/posts/",
        body: obj,
        json: true
    }, function (error, response, body) {
        res.redirect('/');
    });
    console.log(req.body);
});













router.get('/:id', function (req, res, next) {
    //make a post request to our database
    request({
        uri: "http://localhost:8000/posts/" + req.params.id,
        method: "GET",
    }, function (error, response, body) {
        console.log(JSON.parse(body));
        //send a response message
        res.render('create', { posts: JSON.parse(body) });
    });
});


module.exports = router;