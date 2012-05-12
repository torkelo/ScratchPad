
BBoneTrader.Router = function (Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "new": "newAuction",
            "log": "log"
        },

        home: function () {
            BBoneTrader.AuctionList.show();
        },

        newAuction: function () {            
            BBoneTrader.NewAuction.show();
        },

        log: function () {

        }
    });


    return new AppRouter();
    
} (Backbone);
