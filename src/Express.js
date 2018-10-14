var mixin = require('merge-descriptors');
var proto = require('./Application');

exports = module.exports = createApplication;

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, proto, false);
  app.init();

  return app;
}

exports.application = proto;
