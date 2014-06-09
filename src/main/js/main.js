(function() {
    "use strict";
    
    require.config({
        baseUrl: "js", 
        paths: {
            'underscore': 'lib/underscore',
            'backbone': 'lib/backbone',
            'jquery': 'lib/jquery',
            'text': 'lib/require/text',
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
})();
