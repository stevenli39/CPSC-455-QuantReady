var express = require('express');
var router = express.Router();

router.get('/api/logout', (req, res) => {
  // kills the cookie
  req.logout();
  res.send(req.user);
});

router.get('/api/current_user', (req, res) => {
  // req.session contains all the data stored inside of the cookie
  console.log(req);
  res.send(req.user);
});
module.exports = router;
