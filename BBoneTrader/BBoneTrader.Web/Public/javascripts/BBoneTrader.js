

BBoneTrader = new Backbone.Marionette.Application();

BBoneTrader.addRegions({
    navigationRegion: "#navigation",
    mainRegion: "#main"
});

BBoneTrader.bind("initialize:after", function () {
    if (Backbone.history) {
        Backbone.history.start();
    }
});
