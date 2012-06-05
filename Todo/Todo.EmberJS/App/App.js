App = Ember.Application.create();

App.todosController = Ember.ArrayProxy.create({
    content: [],

    createTodo: function (title) {
        var todo = Todo.create({ title: title });
        this.pushObject(todo);
    }
});

App.todosController.createTodo("Task 1");
App.todosController.createTodo("Task 2");