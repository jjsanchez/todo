(function() {
    "use strict";
    
    require(['js/models/todo'], function(Todo) {
        module("Todo model");
      
        test("Should have correct default values", function() {
            var model = new Todo();

            equal(model.get('title'), '');
            equal(model.get('completed'), false);
        });

        test("Should go to completed from uncompleted when toggled", function() {
            var model = new Todo({ completed: false });

            model.toggle();

            ok(model.get('completed'));
        });

        test("Should go to uncompleted from completed when toggled", function() {
            var model = new Todo({ completed: true });

            model.toggle();

            ok(!model.get('completed'));
        });

    });
})();
