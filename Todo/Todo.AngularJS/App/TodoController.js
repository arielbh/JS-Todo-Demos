
function TodoController($scope) {
    $scope.todos = [
        new Todo("task 1", false),
        new Todo("task 2", false)
    ];

    $scope.newTodo = "";

    $scope.addTodo = function () {
        $scope.todos.push(new Todo($scope.newTodo, false));

    };

    $scope.removeTodo = function (todo) {
        for (var i = 0, len = $scope.todos.length; i < len; ++i) {
            if (todo === $scope.todos[i]) {
                $scope.todos.splice(i, 1);
            }
        }
    };

    $scope.remainingTodos = function () {
        return $scope.todos.filter(function (val) {
            return !val.completed;
        }).length;
    };
    
    
}