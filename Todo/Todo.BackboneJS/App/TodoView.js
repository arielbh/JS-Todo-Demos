TodoView = Backbone.View.extend(
{
    tagName: "li",
      initialize: function () {
        _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

        
    },

    render: function () {
        $(this.el).html(this.model.get('title'));
        return this;
    }
    
});