var app = {
    initialize: function(){

      this.bindEvents(); 

    },

   bindEvents: function(){

    document.addEventListner("deviceredy",this.onDeviceRedy, false);

   },
	
   onDeviceRedy: function(){

	this.recivedEvents("deviceredy");

   },

  recivedEvents: function(id){

   $("#main").html("Is Redy");
     console.log("event: "+id); 

  }
  
  };