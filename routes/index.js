var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi There!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Mini Messageboard",
    messages: messages
  });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: "Add a new message"});
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.msg,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
