RAD.view("view.add_task",RAD.Blanks.View.extend({

	url:"js/views/add.html",
	
	events: {
	 "tap .btn-default":"open_show"
    },
	
	open_show: function(){
		"use strict";
		var options = {
			container_id : "#main",
			content: "view.show_task"
		}, animation;

		animation = "slide";
		options.animation = animation;
		options.extras = {animation: animation};
		this.publish("navigation.show",options);
	}
}))