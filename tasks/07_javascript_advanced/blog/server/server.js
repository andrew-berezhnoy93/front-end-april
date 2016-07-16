var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var bodyParser = require('body-parser')
var middlewares = jsonServer.defaults()

server.use(bodyParser.json())
server.use(middlewares)


server.use(function (req, res, next) {
  if (req.method === 'POST' && req.url === '/api/v1/article/create/') {
    req.body.createdAt = new Date();
    req.body.editedAt = new Date();
    req.body.comments = [];
    req.body.likes = 0;
  }
  next()
})



server.use(jsonServer.rewriter({
  '/api/v1/articles': '/articles', // get all articles 	
  '/api/v1/article/create': '/articles', // add article
  '/api/v1/articles/:id': '/articles/:id', // get article by id
  '/api/v1/articles/:id/edit': '/articles/:id/edit', // get article by id
  '/api/v1/articles/:id/like': '/articles/:id', // set like to article
  '/api/v1/articles/:id/comments': '/articles/:id/comments', // add comments to article
}))

server.use(router)
server.listen(3050, function () {
  console.log('JSON Server is running')
})
