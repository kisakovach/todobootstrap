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

RAD.utils.fromUTCDate = function(key,value){

      if(key == "deadline") return new Date(value);
      return value;

};

RAD.utils.setMomentLocale = function(loc){

 if(loc=="ru"){
  moment.locale("ru",{
    calendar : {
            sameDay: '[Сегодня ]',
            nextDay: '[Завтра] ',
            lastDay: '[Вчера]',
            nextWeek: function () {
                return this.day() === 2 ? '[Во] dddd' : '[В] dddd';
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                    case 0:
                        return '[В прошлое] dddd';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd';
                    } else {
                        return '[В] dddd';
                    }
                }
            },
            sameElse: 'L'
        }
     });
 }
}