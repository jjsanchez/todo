define(['backbone', 'text!templates/todoItem.html'], function(Backbone) {

    var Todo = Backbone.View.extend({
        tagName: 'li'
    });

    return Todo;

});