
BBoneTrader.AuctionList = function (Backbone, $) {
    
    var AuctionList = {};

    var PlaceBidCommand = Backbone.Model.extend({
        url: "api/auctions/placeBid"
    });

    var AuctionListItem = Backbone.Model.extend({
        idAttribute: "Id"
    });

    var AuctionListCollection = Backbone.Collection.extend({
        model: AuctionListItem,
        url: "/api/auctions/list"
    });

    var AuctionListItemView = BBoneTrader.View.extend({
        tagName: "div",
        className: "row",
        template: "#auction-item-template",
        events: {
            "click .place-bid": "placeBid"
        },

        initialize: function() {
            this.model.on("change", this.render, this);            
        },

        render: function() {
            BBoneTrader.View.prototype.render.call(this);
            
            if (this.model.get("NewBid")) {
                utils.highlight(this.el);
            }

            return this;
        },

        placeBid: function() {
            var command = new PlaceBidCommand({
                auctionId: this.model.get("Id"),
                amount: $(".bid-amount", this.el).val()
            });

            command.on("error", this.bidPlacedFailed, this);
            command.on("sync", this.bidPlacedSuccess, this);

            command.save();
        },

        bidPlacedFailed: function() {
            utils.showAlert("Error", "Failed to place bid", "alert-error");            
        },

        bidPlacedSuccess: function() {
            utils.showAlert("Success", "Bid placed!", "alert-success");
        },

    });


    var AuctionListView = Backbone.View.extend({
        tagName: "div",
        id: "auction-list",
        
        initialize: function () {

            this.collection.on("reset", this.render, this);

        },

        render: function () {
            $(this.el).html("<h3>Auction List</h3>");

            this.collection.forEach(function (item) {

                var itemView = new AuctionListItemView({ model: item });
                $(this.el).append(itemView.render().el);

            }, this);

            return this;
        }
        
    });

    var auctionList = new AuctionListCollection();
    auctionList.fetch();

    // Events
    BBoneTrader.Events.on("auction:bidPlaced", function(data) {
        console.log("new bid detected! updating auction " + data.Id);

        var auction = auctionList.get(data.Id);
        auction.set(data);
    });

    // Public api    
    AuctionList.show = function () {
        var auctionListView = new AuctionListView({collection: auctionList});
        BBoneTrader.AppView.showView(auctionListView);
    };

    return AuctionList;

} (Backbone, jQuery, BBoneTrader.Events);


