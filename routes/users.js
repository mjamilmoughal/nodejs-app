var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/listing',function(req, res, next){
  var listing = [];

  console.log('Jamil Moughal');

  listing.push({
    id:1,
    name:'Jamil',
    email:'jamil@admin.com',
    designation:'Senior Software Engineer'
  });
  res.render('users-listing',{data:listing})
})

module.exports = router;
