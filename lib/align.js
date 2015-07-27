var header = require(process.cwd() + '/lib/header');

var align = function (weekday, days, name, y, twelveMonth){
  var string = header(name, y, twelveMonth);
  //sun - sat 1 - 7
  var dayName = weekday === '0' ? 7 : weekday;
  var days = days;
  string += 'Su Mo Tu We Th Fr Sa\n';
  var row = '';

  //spaces before 1st day of month
  for (var i = 0; i < (dayName-1)*3; i++) {
    row += ' ';
  };

  //append days to row and start new row every 20 chars
  var rowCount = 0;
  for(var i = 1; i<=days; i++){
    var day = i<10 ? ' '+i : ''+i;
    row += day;
    if(row.length === 20){
      row += '\n';
      string += row;
      row = '';
      rowCount++;
    }else if(i<days){
      row += ' ';
    }
  }

  if(row.length > 0){
    string += row;
  }

  if(rowCount===3){
    string += '\n\n';
  }else if(rowCount===4){
    string += '\n';
  }

  return string;
}

module.exports = align;
