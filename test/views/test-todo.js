require(['views/todo'], function(Todo) {
    module("Todo view");
  
    test("Shold render on an li node", function() {
        var view = new Todo();

        equal(view.tagName, 'li');
    });
});