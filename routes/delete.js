var express = require('express');
var router = express.Router();
var posts = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/:id', function(req, res, next) {
    // console.log(req.params.id)
  //make a post request to our database
  request({
    uri: "http://localhost:8000/posts/"  + req.params.id,
    method: "DELETE"
  })
});
module.exports = router;