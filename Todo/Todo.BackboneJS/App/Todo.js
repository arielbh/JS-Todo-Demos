Todo = Backbone.Model.extend({
    defaults: {
        title: "Empty",
        completed: false
    },

    initialize: function () {
    },
    // Toggle the `done` state of this todo item.
    toggle: function () {
        this.set({ completed: !this.get("completed") });
    }
});