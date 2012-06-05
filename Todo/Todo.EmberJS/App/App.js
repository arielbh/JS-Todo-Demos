App = Ember.Application.create();

App.todosController = Ember.ArrayProxy.create({
    content: [],

    createTodo: function (title) {
        var todo = Todo.create({ title: title });
        this.pushObject(todo);
    },
    remaining: function () {
        return this.filterProperty('completed', false).get('length');
    } .property('@each.completed')
});

App.CreateTodoView = Ember.TextField.extend({
    insertNewline: function () {
        var value = this.get('value');

        if (value) {
            App.todosController.createTodo(value);
            this.set('value', '');
        }
    }
});

App.StatsView = Ember.View.extend({
    remainingBinding: 'App.todosController.remaining',
    remainingString: function () {
        var remaining = this.get('remaining');
        return remaining + (remaining === 1 ? " item" : " items");
    } .property('remaining')
});

App.todosController.createTodo("Task 1");
App.todosController.createTodo("Task 2");