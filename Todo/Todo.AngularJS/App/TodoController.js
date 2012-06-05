
function TodoController($scope) {
    $scope.todos = [
        new Todo("task 1", false),
        new Todo("task 2", false)
    ];

    $scope.newTodo = "";

    $scope.addTodo = function () {
        $scope.todos.push(new Todo($scope.newTodo, false));

    };
    
}