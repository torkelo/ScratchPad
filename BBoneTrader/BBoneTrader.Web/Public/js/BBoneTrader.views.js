
Backbone.View.prototype.close = function(){
  this.remove();
  this.unbind();

  if (this.onClose){
    this.onClose();
  }
  
};

BBoneTrader.View = Backbone.View.extend({

        render: function () {
            var template = $(this.template).text();
            var html = Mustache.to_html(template, this.model.toJSON());
            $(this.el).html(html);

            return this;
        }

});
