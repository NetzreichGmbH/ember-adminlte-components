/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('node_modules/bootstrap/dist/css/bootstrap.css');
  app.import('node_modules/admin-lte/dist/css/skins/_all-skins.css');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/admin-lte/dist/js/adminlte.min.js');
  app.import('vendor/shims/jquery.js');
  return app.toTree();
};
