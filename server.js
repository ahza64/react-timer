var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

// openWeather only runs on http, need to redirect https to http
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('//http:' + req.hostname + req.url);
  } else {
    next();
  }
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express is up on port ' + PORT);
});
