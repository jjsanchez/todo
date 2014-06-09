require.config({
    baseUrl: '../main',

    paths: {
        'underscore': 'js/lib/underscore',
        'backbone': 'js/lib/backbone',
        'jquery': 'js/lib/jquery',
        'text': 'js/lib/require/text',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(
    [
        'models/test-todo.js',
        'views/test-todo.js',
    ], 
    function() {
        QUnit.start();
    }
);