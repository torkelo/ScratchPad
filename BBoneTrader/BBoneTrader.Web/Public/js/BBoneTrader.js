
BBoneTrader = function (Backbone, $) {

    var BBoneTrader = {};
    
    var AppView = Backbone.View.extend({
        el: $("#app-view"),

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
        Backbone.history.start({pushState: true});
    };


    return BBoneTrader;

} (Backbone, jQuery, Mustache);



$(function () {
    BBoneTrader.start();
});

