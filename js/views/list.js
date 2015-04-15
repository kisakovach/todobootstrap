RAD.view("view.list_task",RAD.Blanks.ScrollableView.extend({

	url:"js/views/list.html",
	model:RAD.model("tasks"),
	onEndRender : function() {
	 // this.$("#test").append(this.getView())
	},

	events:{
	 "change input":"OnCheck"
	
	},
	
	OnCheck: function(e) {
		var cid=e.target.value;
		console.log("get value: "+cid);
		if(!e.target.hasAttribute("checked")){                                         
			this.model.get(cid).set("completed",1);
			RAD.models.tasks.saveToLocal();
		} else { 
			this.model.get(cid).set("completed",0);
			RAD.models.tasks.saveToLocal();
		 }                                                                                 
	}


}));                                       