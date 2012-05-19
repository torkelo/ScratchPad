BBoneTrader.Hubs = function(Backbone, $) {

	var traderHub = $.connection.traderHub;

	traderHub.bidPlaced = function(data) {
		BBoneTrader.Events.trigger("serverEvent:bidPlaced", data);
	};

	traderHub.newAuction = function(data) {
		BBoneTrader.Events.trigger("serverEvent:newAuction", data);
	};

	$.connection.hub.start();

}(Backbone, jQuery);