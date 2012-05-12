
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
    
    BBoneTrader.AppView = new AppView();

    BBoneTrader.start = function () {
        Backbone.history.start();
    };


    return BBoneTrader;

} (Backbone, jQuery, Mustache);



$(function () {
    BBoneTrader.start();
});

