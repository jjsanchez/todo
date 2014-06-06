module("Todo model")

test("Should have appropiate default values", function () {
    var todo = new app.Todo();

    equal(todo.get('title'), '');
    equal(todo.get('completed'), false);
});

test("Toggle switches from uncompleted to completed", function() {
    var todo = new app.Todo({ completed: false });

    todo.toggle();

    ok(todo.get('completed'));
});

test("Toggle switches from completed to uncompleted", function() {
    var todo = new app.Todo({ completed: true });

    todo.toggle();

    ok(!todo.get('completed'));
});