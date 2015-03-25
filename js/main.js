var app = {
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