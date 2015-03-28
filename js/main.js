(function (document, window) {
    'use strict';

    var scripts = [
        "js/iscroll-lite.js",
        "js/application.js",
        "js/views/show.js",
        "js/views/add.js"
        
    ];

    function onEndLoad() {
        console.log("onEndLoad");
        var core = window.RAD.core,
            application = window.RAD.application,
            coreOptions = {
                defaultBackstack: false,
                defaultAnimation: 'none',
                animationTimeout: 3000,
                debug: false
            };

        //initialize core by new application object
        core.initialize(application, coreOptions);

        //start
        application.start();
    };

    window.RAD.scriptLoader.loadScripts(scripts, onEndLoad);
}(document, window));



/*var app = {
    initialize: function(){

      this.bindEvents(); 

    },

   bindEvents: function(){

    document.addEventListner("deviceready",this.onDeviceRedy, false);

   },
	
   onDeviceRedy: function(){

	this.recivedEvents("deviceready");

   },

  recivedEvents: function(id){

   $("#main").html("Is Ready");
     console.log("event: "+id); 

  }
  
  };
  */