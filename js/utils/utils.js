Date.createFromMySql=function(mysql_string) {
  if(typeof mysql_string === 'string') {
        var t = mysql_string.split(/[- :\.]/);
        return new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);          
  }
        return mysql_string;   
};


RAD.utils.cropdate = function(task){
      var date = Date.createFromMySql(task.get("deadline"));
      return new Date(date.getFullYear(),date.getMonth(),
        date.getDate()); 
};

