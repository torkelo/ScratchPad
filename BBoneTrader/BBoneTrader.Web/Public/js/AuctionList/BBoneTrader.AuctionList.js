
BBoneTrader.AuctionList = function (Backbone, $) {

    var AuctionListItem = Backbone.Model.extend({});

    var AuctionListCollection = Backbone.Collection.extend({
        model: AuctionListItem,
        url: "/api/auctions/list"
    });

    var AuctionListItemView = BBoneTrader.View.extend({
        tagName: "div",
        template: "#auction-item-template",
        events: {
            "click .place-bid": "placeBid"
        },

        placeBid: function() {

        }

    });


    var AuctionListView = Backbone.View.extend({
        tagName: "div",
        id: "auction-list",
        events: {
            "click .place-bid": "placeBid"
        },

        initialize: function () {

            this.auctions = new AuctionListCollection();
            this.auctions.on("reset", this.render, this);

            this.auctions.fetch();
        },

        render: function () {
            $(this.el).html("<h3>Auction List</h3>");

            this.auctions.forEach(function (item) {

                var itemView = new AuctionListItemView({ model: item });
                $(this.el).append(itemView.render().el);

            }, this);

            return this;
        },

        placeBid: function() {

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


