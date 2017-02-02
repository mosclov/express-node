var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Travel Site');
});

app.get('/about', function(req, res) {
  res.type('text/plain');
  res.send('About Travel Site');
});

//404 Page
app.use(function(req, res){
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
});

//500 Page
app.use(function(req, res){
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log(`Express started on http://localhost:${app.get('port')}; press Ctril-C to terminate.`);
});
