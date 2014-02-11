var koa = require('koa');
var route = require('koa-route');
var serve = require('koa-static');
var views = require('co-views');
var app = koa();


var render = views(__dirname + '/views', { map : {html : 'ejs'}});

app.use(route.get('/', function *(next) {
  this.body = yield render('index.ejs', {name: "koa"});
}));

app.use(route.get('/hello', function *(next) {
  this.body = 'Hello';
}));

// GET /hello/:name => 'Hello :name'
app.use(route.get('/hello/:name', function *(name) {
  this.body = 'Hello ' + name;
}));


// static file serve
app.use(serve(__dirname + '/public'));

app.listen(3000,function(){
  console.log( "linsten http://localhost:3000/" );
});