BBoneTrader.Hubs = function(Backbone, $) {

	var traderHub = $.connection.traderHub;

	traderHub.bidPlaced = function(data) {
		BBoneTrader.Events.trigger("auction:bidPlaced", data);

		console.log("auction:bidPlaced triggered");
	};

	$.connection.hub.start();

}(Backbone, jQuery);