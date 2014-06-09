(function() {
    "use strict";

    require(['js/views/todo'], function(Todo) {
        module("Todo view");
      
        test("Should render on an li node", function() {
            var view = new Todo();

            equal(view.tagName, 'li');
        });
    });
})();
