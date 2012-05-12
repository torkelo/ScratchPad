
BBoneTrader.AuctionList = function (Backbone, $) {

    var AuctionListItem = Backbone.Model.extend({});

    var AuctionListCollection = Backbone.Collection.extend({
        model: AuctionListItem,
        url: "/api/auctions"
    });

    var AuctionListItemView = BBoneTrader.View.extend({
        tagName: "div",
        template: "#auction-item-template"
    });


    var AuctionListView = Backbone.View.extend({
        tagName: "div",
        id: "auction-list",

        initialize: function () {

            this.auctions = new AuctionListCollection();
            this.auctions.on("reset", this.render, this);

            this.auctions.fetch();
        },

        render: function () {

            this.auctions.forEach(function (item) {

                var itemView = new AuctionListItemView({ model: item });
                $(this.el).append(itemView.render().el);

            }, this);

            return this;
        }
    });

    // Public api
    var AuctionList = {};

    AuctionList.show = function () {
        var auctionListView = new AuctionListView();
        BBoneTrader.AppView.showView(auctionListView);
    };

    return AuctionList;

} (Backbone, jQuery);


