
BBoneTrader.NewAuction = function (Backbone, $) {

	var CreateAuctionCommand = Backbone.Model.extend({
        url: "api/auctions/create"

    });

    var NewAuctionView = BBoneTrader.View.extend({
        template: "#new-auction-template",
        events: {
            "click #create-auction": "create",
            "change input,textarea": "fieldChange"
        },

        fieldChange: function(e) {
            var field = $(e.currentTarget);
            var data = {};
            data[field.attr('id')] = field.val();
            this.model.set(data);            
        },

        create: function() {
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
