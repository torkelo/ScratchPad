

var AuctionItem = Backbone.Model.extend({
});

var AuctionItemCollection = Backbone.Collection.extend({
	url: "api/auctions/list",
	model: AuctionItem
})

var AuctionItemView = Backbone.View.extend({

	events: {
		"click .place-bid": "placeBid"
	},
	
	render: function() {
		var template = $("#auction-item-template").text();
		
		var html = Mustache.to_html(template, this.model.toJSON());
        $(this.el).html(html);

        return this;
	},

	placeBid: function() {
		this.model.set({Bids: 1});
	}

});

var MainView = Backbone.View.extend({
	el: $("#app-view"),
	
	initialize: function(){

		this.collection = new AuctionItemCollection();
		this.collection.on("reset", this.render, this);

		this.collection.fetch();	
	},

	render: function() {

		this.collection.forEach(function(item) {

			var itemView = new AuctionItemView({model: item});			
			$("#main-region").append(itemView.render().el);

		});
	}	
});

var view = new MainView();


