

BBoneTrader = new Backbone.Marionette.Application();

BBoneTrader.addRegions({
    navigationRegion: "#navigation",
    mainRegion: "#main"
});

BBoneTrader.ItemView = Backbone.Marionette.ItemView;
BBoneTrader.CollectionView = Backbone.Marionette.CollectionView;

BBoneTrader.AuctionApp = (function (BBoneTrader, Backbone) {
    var AuctionApp = {};

    AuctionApp.AuctionListView = BBoneTrader.ItemView.extend({

        initialize: function () {

        },

        render: function () {
            this.el = $("<h2>hello</h2>");
            return this.el;
        }

    });

    BBoneTrader.addInitializer(function () {
        var view = new AuctionApp.AuctionListView();
        BBoneTrader.mainRegion.show(view);
    });

    return AuctionApp;
})(BBoneTrader, Backbone);



BBoneTrader.bind("initialize:after", function () {
    if (Backbone.history) {
        Backbone.history.start();
    }
});
