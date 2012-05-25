BBoneTrader.AgentLog = function(Backbone, $) {

	var AgentLogItemView = BBoneTrader.View.extend({
		template: "#agent-log-item-template",
	});

	var AgentLogView = BBoneTrader.View.extend({
		el: $(".agent-log"),
		events: {
			"dblclick": "toggleExpand"
		},

		initialize: function() {
			this.collection.on("add", this.addLogItem, this);
		},

		addLogItem: function(logItem) {
			var jel = $(this.el);
			var view = new AgentLogItemView({model: logItem});
			jel.append(view.render().el);
			jel.scrollTop(jel[0].scrollHeight);
		},

		toggleExpand: function(){
			var current = $(this.el).css("height");		
			var min = $(this.el).css("min-height");			
			var max = $(this.el).css("max-height");						

			if (current == min) {
				$(this.el).animate({ height: max}, 500);								
			} else {
				$(this.el).animate({ height: min}, 500);				
			}			
		}

	});

	var agentLogList = new Backbone.Collection();
	var agentLogView = new AgentLogView({collection: agentLogList});

	setInterval(function() {
		agentLogList.add(new Backbone.Model({
			time: "10:30:11",
			agentName: "duffman",
			level: "info",
			logger: "DeploySiteTask",
			message: "Shutting down site..."
		}));
	}, 1000);
	


}(Backbone, jQuery);