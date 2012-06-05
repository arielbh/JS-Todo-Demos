TodoView = Backbone.View.extend(
{
    tagName: "li",
    events: {
        "click .check": "toggle"

    },
    initialize: function () {
        _.bindAll(this, 'render', 'toggle'); // fixes loss of context for 'this' within methods
        this.model.bind('change', this.render);


    },

    render: function () {
        $(this.el).empty();
        var div = $("<div class='display'>");
        var outer;
        if (this.model.get('completed')) {
            outer = $("<div class='todo done'>");
            div.append("<input class='check' type='checkbox' checked='checked'></input>");

        } else {
            outer = $("<div class='todo'>");
            div.append("<input class='check' type='checkbox' ></input>");
        }


        div.append("<label class='todo-content'>" + this.model.get('title') + "'</label>");

        outer.append(div);

        $(this.el).append(outer);

        return this;
    },
    toggle: function () {
        this.model.toggle();
    }



});