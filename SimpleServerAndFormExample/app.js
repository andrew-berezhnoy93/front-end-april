var express = require('express');
var app = express();
var answers = [];
var answerIndex = 1;

app.use(express.bodyParser());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');
  next();
}

app.use(allowCrossDomain);

app.get('/', function(req, res) {
  res.send('Hello! For getting answers -> GET to "<a href=\"/answers\">/answers</a>"');
});

app.get('/answers', function(req, res) {
  res.json(answers);
});

app.get('/answers/:id', function(req, res) {
  var result;
  
  answers.forEach(function(item) {
    if (item.id == req.params.id) {
		result = item;
	}
  });
  
  if (!result) {
	res.status(404);
	res.send('Answer not found.');
  } else {
    res.json(result);
  } 
});

app.post('/answers', function(req, res) {
  var answer = req.body;
  answer.id = answerIndex++;
  
  answers.push(answer);
  
  res.json(answers);
});

app.listen(process.env.PORT || 4730);