var COOKIE_PREFIX = 'mountainrush';
var COOKIE_DELIM = '_';
var DEF_CLIENT_ID = 'djJrblYlXV'; // Mountain Rush

require.config({
  waitSeconds: 20,
  paths: {
    jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
    backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min',
    bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min',
    d3: 'https://d3js.org/d3.v4.min'
  },
  shim: {
    'jqueryUI' : {
      deps: ['jquery']
    },
    'bootstrap' : {
      deps: ['jquery']
    }
  }
});

// Load our app module and pass it to our definition function
require(['controller/' + APP], function(App){
  App.initialize();
})
