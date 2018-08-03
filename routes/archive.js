var express = require('express');
var router = express.Router();
var posts = require('../db.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(posts);

  res.render('index', { title: 'Home', posts: posts.posts });
});

/* GET contact page. */
router.get('/archive', function (req, res, next) {
  res.render('archive', { title: 'archive' });
  // res.render('index', { title: 'Home', posts: posts.posts });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'contact' });
});




module.exports = router;




// var express = require('express');
// var router = express.Router();
// var posts = require('../db.json');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log(posts);

//  res.render('index', { title: 'Home', posts: posts.posts });
// });

// /* GET contact page. */
// router.get('/archive', function(req, res, next) {
//  res.render('archive', { title: 'archive' });
// });

// /* GET contact page. */
// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'contact' });
//  });


// module.exports = router;