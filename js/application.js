RAD.application(function (core) {
    'use strict';

    var app = this;

    app.start = function () {
        var options = {
            container_id: '#main',
            content: "view.show_task",
            animation: 'none'
        };
        core.publish('navigation.show', options);
        console.log("app start");
    };

    return app;
}, true);

