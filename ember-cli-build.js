/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
<<<<<<< HEAD
    sassOptions: {
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets'
      ]
    }
  });

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

=======
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    }
  });
>>>>>>> Update 022/master from ember-auth-template
  return app.toTree();
};
