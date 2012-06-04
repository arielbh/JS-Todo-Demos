Todo = function(title, completed) {
    var self = this;
    self.title = ko.observable(title);
    self.completed = ko.observable(completed);
};