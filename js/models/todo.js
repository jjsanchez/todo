define(['backbone'], function(Backbone) {

    var Todo = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: false
        },

        toggle: function() {
            this.set('completed', !this.get('completed'));
        }
    });

    return Todo;
});