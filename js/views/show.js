RAD.view("view.show_task",RAD.Blanks.View.extend({

	url:"js/views/show.html",
	
	events: {
	 "tap .div-round" : "open_add"
    },
	
	open_add: function(){
		"use strict";
		console.log("tap add");
		var options = {
			container_id : "#main",
			content: "view.add_task"
		}, animation;

		animation = "slide";
		options.animation = animation;
		options.extras = {animation: animation};
		this.publish("navigation.show",options);
	}
}))