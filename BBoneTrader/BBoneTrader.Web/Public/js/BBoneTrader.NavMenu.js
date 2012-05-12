
BBoneTrader.NavMenu = function (Backbone, $) {

    var NavMenuView = Backbone.View.extend({
        el: $(".nav"),

        initialize: function () {
            _.bindAll(this, "showView");
        },

        showView: function (view) {
            $(this.el).html(view.render().el);
        }
    });
    
    BBoneTrader.Events = _.extend({}, Backbone.Events);
    BBoneTrader.AppView = new AppView();

    BBoneTrader.start = function () {
        Backbone.history.start();
    };


    return BBoneTrader;

} (Backbone, jQuery, Mustache);



$(function () {
    BBoneTrader.start();
});

