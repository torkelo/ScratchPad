BBoneTrader.ItemView = Backbone.Marionette.ItemView;
BBoneTrader.CollectionView = Backbone.Marionette.CollectionView;


(function () {
    var promises = {};

    var loadTemplateAsync = function (tmpId) {
        var promise = promises[tmpId] || $.get("/public/templates/" + tmpId + ".html");
        promises[tmpId] = promise;
        return promise;
    }

    // Use jQuery to asynchronously load the template. 
    Backbone.Marionette.TemplateManager.loadTemplate = function (templateId, callback) {
        var tmpId = templateId.replace("#", "");
        var promise = loadTemplateAsync(tmpId);
        promise.done(function (template) {
            callback.call(this, $(template));
        });
    }
})();