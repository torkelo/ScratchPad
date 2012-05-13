
BBoneTrader.NewAuction = function (Backbone, $) {

	var CreateAuctionCommand = Backbone.Model.extend({
        url: "api/auctions/create"

    });

    var NewAuctionView = BBoneTrader.View.extend({
        template: "#new-auction-template",
        events: {
            "click #create-auction": "create"
        },

        create: function() {
            this.model.set({
                Title: $("#auction-title").val(),
                Description: $("#auction-description").val(),
                MinBid: $("#auction-min-bid").val()
            });

            this.model.save();
        }


    });


	// public api
    var NewAuction = {};

    NewAuction.show = function() {
    	var view = new NewAuctionView({model: new CreateAuctionCommand()});
        BBoneTrader.AppView.showView(view);
    };


    return NewAuction;

}(Backbone, jQuery);
