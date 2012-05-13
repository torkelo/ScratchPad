
BBoneTrader.Menu = function (Backbone, $) {


     var menu = {};
     /*

    //var MenuItem = Backbone.Model.extend({});
    //var MenuItemCollection = Backbone.Collection.extend({
    //    model: NavMenuItem
    //});

    menu.items = new Backbone.Collection();
    menu.items.reset([
        {
            text: "Auction List",
            route: "auctions",
            active: true
        },
        {
            text: "New Auction",
            route: "new",
            active: false
        },
        {
            text: "Log",
            route: "log",
            active: false
        }
    ]);

    var MenuItemView = BBoneTrader.View.extend({
        tagName: "li", 
        events: {
            "click a": "navigate"
        },

        initialize: function() {
            _.bindAll(this, "render");
        },       
                
        render: function() {
            
            $(this.el).html("<a href='javascript:;'>" + this.model.get("text") + "</a>");
            
            if (this.model.get("active")) 
                $(this.el).addClass("active");

            return this;
        },

        navigate: function() {
            BBoneTrader.Router.navigate(this.model.get("route"), true);
            
            this.model.set({active: true});

            $(this.el).addClass("active");
        }   

    });

*/
    var MenuView = Backbone.View.extend({
        el: $(".nav"),
        events: {
            "click a": "navigate"
        },

        initialize: function() {
             BBoneTrader.Router.on("all", this.routeMatched, this);                
        },

        routeMatched: function(route) {
            $("li.active", this.el).removeClass("active");

            route = route.replace('route:', '');

            $("a[data-route='" + route + "']").parent().addClass("active");
        },

        navigate: function(e) {
            e.preventDefault();
            var route = $(e.target).data("route");
            BBoneTrader.Router.navigate(route, true);            
        }
        
    });
    



    //menu.view = new MenuView();
/*
    BBoneTrader.Router.on("all", function(route, section) {
        $(".nav li.active").removeClass("active");

        route = route.replace('route:', '');        

        console.log(route);
        $(".nav a[href='#" + route + "']").addClass("active");
        console.log(".nav a[href='#" + route + "']");        
    });*/
    
    menu.view = new MenuView();

    return menu;

} (Backbone, jQuery);



