
BBoneTrader.NewAuction = function (Backbone, $) {

	var Auction = Backbone.Model.extend({});

    var NewAuctionView = BBoneTrader.View.extend({
            template: "#new-auction-template"

    });

	// public api
    var NewAuction = {};

    NewAuction.show = function() {
    	var view = new NewAuctionView({model: new Auction()});
        BBoneTrader.AppView.showView(view);
    };

    return NewAuction;

}(Backbone, jQuery);
