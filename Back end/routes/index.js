var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:3000/view';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get-data',function(req,res,next){
  mongo.connect(url,function(err,db){
    assert.equal(null,err);
    var cursor = db.collection('use-data').find();
  });

});
router.post('/insert',function(req,res,next){
  var item={
    title:req.body.title,
    content:req.body.content,
    author:req.body.author
  };
  mongo.connect(url,function(err,db){
    assert.equal(null,err);
    db.collection('user-data').insertone(item,function(err,result){
      assert.equal(null,error);
      console.log('item inserted');
      db.close;}
});
});
module.exports = router;
