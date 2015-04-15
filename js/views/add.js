RAD.view("view.add_task",RAD.Blanks.ScrollableView.extend({

	url:"js/views/add.html",
	//model: RAD.task("tasks"),
	events: {
	 "tap .btn-default":"add_task"
   	 },
	
	add_task: function(){
		"use strict";
		/*var options = {
			container_id : "#main",
			content: "view.show_task"
		}, animation;

		animation = this.extras.animation+"-out";
		options.animation = animation;
		this.publish("navigation.show",options);*/
			
	        RAD.models.tasks.add({"title": this.$("#title").val(),
					"deadline": new Date(this.$("#deadline").val()+" "+this.$("#time").val()), 
					"text":this.$("#text").val()
					});
		this.publish("view.model.change");
		RAD.models.tasks.saveToLocal();
		console.log("'add shedule' button click");
	},

	onEndAttach: function(){
             
		 console.log("end render");	
		 $('#datepicker').datetimepicker({
                    locale: 'ru',
		    viewMode: 'years',
                    format: 'MM/DD/YYYY'
                 });

		$('#timepicker').datetimepicker({
                    locale: 'ru',
                    format: 'HH:mm'
                 });      
	}
}))