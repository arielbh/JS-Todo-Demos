AppView = Backbone.View.extend({
    el: $("#todoapp"),
    events: {
        "keypress #new-todo": "createOnEnter"
    },

    initialize: function () {
        _.bindAll(this, 'render', "addItem", "appendItem", "createOnEnter"); // fixes loss of context for 'this' within methods

        this.input = this.$("#new-todo");

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

    createOnEnter: function (e) {
        if (e.keyCode != 13) return;
        
        this.addItem(new Todo({ title: this.input.val() }));
        this.input.val('');
    },


    appendItem: function (item) {
        $('ul', this.el).append("<li>" + item.get('title') + "</li>");
    }




});
