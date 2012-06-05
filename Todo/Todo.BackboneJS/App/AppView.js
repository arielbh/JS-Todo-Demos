AppView = Backbone.View.extend({
    el: $("#todoapp"),

    initialize: function () {
        _.bindAll(this, 'render', "addItem", "appendItem"); // fixes loss of context for 'this' within methods
        this.source = new Todos();
        this.source.bind("add", this.appendItem);

        this.render(); // not all views are self-rendering. This one is.
    },

    render: function () {
        

        $(this.el).append("<ul></ul>");
        if (this.source) {
            _(this.source.models).each(function (item) { // in case collection is not empty
                self.appendItem(item);
            }, this);
        }
        return this;
    },
    
    addItem: function (todo) {
        this.source.add(todo);
    },


    appendItem: function (item) {
        $('ul', this.el).append("<li>" + item.get('title') + "</li>");
    }


});
