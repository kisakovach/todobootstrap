(function (document, window) {
    'use strict';

    var scripts = [
          "js/lib/iscroll-lite.js",
        	"js/utils/utils.js",
        	"js/models/task.js",
        	"js/models/tasks.js",
        	"js/application.js",
          "js/views/show.js",
          "js/views/add.js",
        	"js/views/daytasks.js",
        	"js/views/list.js",
        	"js/views/start.js",
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
	
	//initialize Task collection
	/*
	RAD.model("tasks").add([
	{"title":"First task","text":"new text 1"},
	{"title":"Second task","text":"new text 2"},
	{"title":"Third task","text":"new text 3","completed":1},
	{"title":"Fourth task","text":"new text 4"}
	]);
	
	RAD.model("tasks").add([
	{"title":"task44","deadline":new Date("10/10/2015 13:56"),"text":"new text 32"},
	{"title":"task24","deadline":new Date("10/10/2015 10:36"),"text":"new text 34"},
	{"title":"task12","deadline":new Date("10/10/2015 9:08"),"text":"new text 12","completed":1},
	{"title":"task43","deadline":new Date("10/15/2015 7:56"),"text":"new text 32","completed":0},
	{"title":"task52","deadline":new Date("10/15/2015 9:38"),"text":"new text 12","completed":1},
	]);
	*/
	console.log(RAD.models);
	
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