RAD.view("view.start", RAD.Blanks.View.extend({

url:"js/views/start.html",


events : {

"tap #list-btn":"onList",
"tap #add-btn":"onAdd",
"tap #shed-btn":"onShed",
"tap #time-btn":"onTime"

},

onInitialize: function() {

RAD.models.tasks.loadFromLocal();
console.log("Load tasks");

},


onList: function(){

this.$('#head-button').html("<h3>Tasks</h3>");

var options={
container_id:'#main',
content:"view.list_task"	
}, animation;

 animation = "fade";
 options.animation = animation;
 this.publish("navigation.show",options);
 
},

onAdd: function(){

this.$('#head-button').html("<button class='btn btn-default up-btn'>Tasks</button>");
var options={
 	container_id:'#main',
	content:"view.add_task",	
 },animation;

 animation = "fade";
 options.animation = animation;
 this.publish("navigation.show",options);
 console.log("'add' taped");

},

onShed: function(){

this.$('#head-button').html("<button class='btn btn-default up-btn'>Edit Task</button>");

var options={
 	container_id:'#main',
	content:"view.show_task",	
 },animation;

 animation = "fade";
 options.animation = animation;
 this.publish("navigation.show",options);

console.log("'shedule' taped");

},

onTime: function(){

console.log("'time' taped");

}


}));