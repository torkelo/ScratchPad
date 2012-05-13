
BBoneTrader.Router = function (Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "auction",
            "auctions": "auctions",
            "new": "new",
            "log": "log"
        },

        auctions: function () {
            BBoneTrader.AuctionList.show();
        },

        new: function () {            
            BBoneTrader.NewAuction.show();
        },

        log: function () {

        }
    });


    return new AppRouter();
    
} (Backbone);
