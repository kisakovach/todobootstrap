RAD.view("view.add_task",RAD.Blanks.View.extend({

	url:"js/views/add.html",
	
	events: {
	 "tap .btn-default":"open_show"
    },
	
	open_show: function(){
		"use strict";
		/*var options = {
			container_id : "#main",
			content: "view.show_task"
		}, animation;

		animation = this.extras.animation+"-out";
		options.animation = animation;
		this.publish("navigation.show",options);*/
		console.log("'add shedule' button click");
	}
}))