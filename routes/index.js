var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/users', function(req, res) {
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/shopvintagedolls';

  MongoClient.connect(url, function(err, db) {
    if(err) {
      console.log('Unable to connect to the server', err);
    } else {
      console.log('Connection Established');
      var collection = db.collection('users');
      collection.find({}).toArray(function(err, result) {
        if(err) {
          res.send('A problem has occured', err);
        } else {
          res.render('users', {
            'users': result
          });
        };

        db.close();
      });
    };
  });
});

module.exports = router;
