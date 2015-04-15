RAD.model("tasks",Backbone.Collection.extend({
	
	model: RAD.model("task"),
	
	comparator: function(task){	        
                return  -task.get('deadline').valueOf();
        },
	
	saveToLocal: function() { 
	
		localStorage.setItem("tasks",JSON.stringify(this.toJSON()));
			
	},
	
	loadFromLocal: function() {
	
		this.set(JSON.parse(localStorage.getItem("tasks"),RAD.utils.fromUTCDate));

	}
	
}),true);