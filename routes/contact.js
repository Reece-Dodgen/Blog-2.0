var express = require('express');
var router = express.Router();
var posts= require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(posts);
  
 res.render('index', { title: 'Home', posts: posts.posts });
});

/* GET contact page. */
router.get('/archive', function(req, res, next) {
 res.render('archive', { title: 'archive' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
 });
 

 router.post('/contact', function(req, res, next) {
  // console.log(req.body);
  let obj = {
    "title": req.body.title,
    "author": req.body.author,
    "datetime": req.body.datetime,
    "content": req.body.content
  }

  request.post({
    url: "http://localhost:8000/posts",
    body: obj,
    json: true
  }, function(error, response, body){
    res.redirect('/');
  });
  
  // res.render('posts', { title: 'POSTS' });
});

module.exports = router;