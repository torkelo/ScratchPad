
BBoneTrader.Log = function (Backbone, $) {
	
    var LogView = BBoneTrader.View.extend({
        template: "#log-template",

        initialize: function() {
            this.model = new Backbone.Model();
        }

    });

	// public api
    var log = {};

    log.show = function() {
    	var view = new LogView();
        BBoneTrader.AppView.showView(view);
    };

    return log;

}(Backbone, jQuery);
