
BBoneTrader.AuctionApp = (function (BBoneTrader, Backbone) {
    var AuctionApp = {};

    AuctionApp.Auction = Backbone.Model.extend({});
    AuctionApp.AuctionCollection = Backbone.Collection.extend({
        url: "/auctions",
        model: AuctionApp.Auction
    });

    var AuctionView = BBoneTrader.ItemView.extend({
        tagName: "div",
        template: "#email-view-template"
    });

    var AuctionListView = BBoneTrader.CollectionView.extend({
        tagName: "div",
        itemView: AuctionView
    });

    AuctionApp.AuctionListView = BBoneTrader.ItemView.extend({

        initialize: function () {
            
        },

        render: function () {
            this.el = $("<h2>hello</h2>");
            return this.el;
        }

    });

    BBoneTrader.addInitializer(function () {
        var auctions = new AuctionApp.AuctionCollection();
        auctions.fetch();
        var view = new AuctionListView({
            collection: auctions
        });
        BBoneTrader.mainRegion.show(view);
    });

    return AuctionApp;
})(BBoneTrader, Backbone);


