require.config({
    paths: {
        'underscore': '../lib/underscore',
        'backbone': '../lib/backbone',
        'jquery': '../lib/jquery'
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

require(['models/test-todo.js'], function() {
    QUnit.start();
});