ViewModel = function () {
    var self = this;
    self.todos = ko.observableArray();
    self.current = ko.observable();

    self.add = function () {
        if (self.current()) {
            var trim = self.current().trim();
            if (trim) {
                self.todos.push(new Todo(trim, false));
            }
        }
    };

    self.canAdd = ko.computed(function() {
        return !self.current();
    });
}
