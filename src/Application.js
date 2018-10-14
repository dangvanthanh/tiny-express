var http = require('http');
var methods = require('methods');
var Router = require('./Router');
var app = (exports = module.exports = {});
var slice = Array.prototype.slice;

app.init = function() {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this._router = undefined;
};

app.lazyrouter = function() {
  if (!this._router) {
    this._router = new Router();
  }
};

app.listen = function() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.handle = function handle(req, res, out) {
  var router = this._router;
  router.handle(req, res);
};

methods.forEach(function(method) {
  app[method] = function(path) {
    this.lazyrouter();
    var route = this._router.route(path);

    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});
