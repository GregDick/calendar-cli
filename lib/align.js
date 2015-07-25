var header = require(process.cwd() + '/lib/header');

var align = function (weekday, days, name, y){
  var string = header(name, y);
  //sun - sat 1 - 7
  var dayName = weekday === '0' ? 7 : weekday;
  var days = days;
  string += 'Su Mo Tu We Th Fr Sa\n';
  var row = '';
  for (var i = 0; i < (dayName-1)*3; i++) {
    row += ' ';
  };
  for(var i = 1; i<=days; i++){
    var day = i<10 ? ' '+i : ''+i;
    row += day;
    if(row.length === 20){
      row += '\n';
      string += row;
      row = '';
    }else{
      row += ' ';
    }
  }
  if(row.length > 0){
    string += row;
  }
  return string;
}

module.exports = align;
