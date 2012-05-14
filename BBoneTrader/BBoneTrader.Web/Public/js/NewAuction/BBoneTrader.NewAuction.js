
BBoneTrader.NewAuction = function (Backbone, $) {
	
    var NewAuctionView = BBoneTrader.View.extend({
        template: "#new-auction-template",
        events: {
            "click .create": "create",
            "change": "change"
        },

        change: function(event){
            utils.hideAlert();

            // Apply the change to the model
            var target = event.target;
            var change = {};
            change[target.id] = target.value;
            this.model.set(change);

            // Run validation rule (if any) on changed item
            var check = this.model.validateItem(target.id);

            if (check.isValid === false) {
                utils.addValidationError(target.id, check.message);
            } else {
                utils.removeValidationError(target.id);
            }
        },

        create: function(e) {
            
            var check = this.model.validateAll();
            if (check.isValid === false) {                
                utils.displayValidationErrors(check.messages);
                return false;
            }        

            this.model.save();

            BBoneTrader.Router.navigate("auctions", true);

            utils.showAlert("Success", "New Auction created!", "alert-success")
        }
        
    });


	// public api
    var NewAuction = {};

    NewAuction.show = function() {
    	var view = new NewAuctionView({model: new BBoneTrader.Commands.NewAuctionCommand()});
        BBoneTrader.AppView.showView(view);
    };

    return NewAuction;

}(Backbone, jQuery);
