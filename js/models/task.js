RAD.model("task",Backbone.Model.extend({

	defaults:{
	 title:"New task",
	 text:"to do some thing",
         deadline:new Date(),
         completed:0
	}

}),false);