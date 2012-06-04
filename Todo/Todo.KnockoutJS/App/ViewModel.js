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

    self.remove = function (todo) {
        self.todos.remove(todo);

    };

    self.canAdd = ko.computed(function () {
        return !self.current();
    });

    self.remaining = ko.computed(function () {
        return ko.utils.arrayFilter(self.todos(), function (t) {
            return !t.completed();
        }).length;
    });

    self.editItem = function (item) {
        item.editing(true);
    };

    // stop editing an item.  Remove the item, if it is now empty
    self.stopEditing = function (item) {
        item.editing(false);
        if (!item.title().trim()) {
            self.remove(item);
        }
    };

}
