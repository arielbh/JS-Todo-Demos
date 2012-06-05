App = Ember.Application.create();

App.todosController = Ember.ArrayProxy.create({
    content: [],

    createTodo: function (title) {
        var todo = Todo.create({ title: title });
        this.pushObject(todo);
    }
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

App.todosController.createTodo("Task 1");
App.todosController.createTodo("Task 2");