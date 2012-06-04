$(function () {
    var vm = new ViewModel();
    vm.todos.push(new Todo("ariel", false));
    vm.todos.push(new Todo("margol", false));
    
    ko.applyBindings(vm);
});