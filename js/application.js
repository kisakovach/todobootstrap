RAD.application(function (core) {
    'use strict';

    var app = this;

    app.start = function () {
        var options = {
            container_id: '#screen',
            content: "view.start",
            animation: 'none'
        };
        core.publish('navigation.show', options);
        console.log("app start");
    };

    app.edit = function(id) {
      var options = {
            container_id: '#main',
            content: "view.add_task",
            animation: 'fade',
            extras:{i:id}
        };
        core.publish('navigation.show', options);
        //console.log("edit task '"+id+"'  click");  
    }

    return app;
}, true);

