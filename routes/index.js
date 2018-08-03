var express = require('express');
var router = express.Router();
var posts = require('../db.json');
var request = require("request");
/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(Posts);

  res.render('index', { title: 'Home', posts: posts.posts });
});

/* GET contact page. */
router.get('/archive', function (req, res, next) {
  res.render('archive', { title: 'archive', posts: posts.posts });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'contact', posts: posts.posts });
});

router.get('/create', function (req, res, next) {
  res.render('create');
});

/* GET contact page. */
router.get('/archive', function (req, res, next) {
  // res.render('archive', { title: 'archive' });
  res.render('index', { title: 'Home', posts: posts.posts });
});

/* GET contact page. */
router.get('/delete/:id', function (req, res, next) {
  request({
    url: "http://localhost:8000/posts/" + req.params.id,
    method: "DELETE",
  }, function (error, response, body) {
    res.redirect("/archive");
  })
  // res.render('archive', { title: 'archive' });
  // res.render('index', { title: 'Home', posts: posts.posts });
});





//GET edit page

//  router.get('/edit/:id', function(req, res, next) {
//   var id;
//   var post = Posts.posts;

//   for(var i = 0; i < post.length; i++){
//     if(post[i].id == req.params.id){
//       id = i;
//     }
//   }

//   res.render('edit',{
//     title:'Edit Page',
//     posts : Posts.posts,
//     id : id,
//   });
// });


// UPDATE ROUTES
router.get('/edit/:id', function (req, res, next) {

  //make a post request to our database
  request({
    uri: "http://localhost:8000/posts/" + req.params.id,
    method: "GET",
  }, function (error, response, body) {
    console.log(JSON.parse(body));
    //send a response message
    res.render('edit', { message: false, posts: JSON.parse(body) });
  });

});

router.post('/edit/:id', function (req, res, next) {
  request({
    uri: "http://localhost:8000/posts/" + req.params.id,
    method: "PATCH",
    form: {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    }
  }, function (error, response, body) {
    // console.log(body);
    //send a response message
    res.render('edit', { message: 'Successfully Changed.', posts: JSON.parse(body) });
  });
});


/* GET sign up page. */
router.get('/signUp', function (req, res, next) {
  res.render('signUp', { title: 'Sign up' });
});


/* GET sign up page. */
router.post('/signUp', function (req, res, next) {
  var id = posts.users[posts.users.length-1].id + 1;

  var obj={
    "id": req.body.id,
    "user": req.body.user,
    "email": req.body.email,
    "password": req.body.password,
  }

  request.post({
    url:"http://localhost:8000/users",
    body:obj,
    json:true
  },function(error, responsive, body){
    res.redirect("/");
  });
});


/* GET sign up page. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Log In' });
});

// post login page
router.post('/login', function(req, res, next){
  var users =posts.users;
  
  var user = req.body.user;
  var password = req.body.password

  for(let i in users){
    if(user == users[i].user && password == users[i].password){
      res.render('index', {title: 'Home', posts: posts.posts});
    }
  }
  res.render('login',{title: "login", message: "Username or password is incorrect"});
});




module.exports = router;
