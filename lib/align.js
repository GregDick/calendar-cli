var align = function (weekday, days){
  //sun - sat 1 - 7
  var dayName = weekday === '0' ? 7 : weekday;
  var days = days;
  var string = 'Su Mo Tu We Th Fr Sa\n';
  var row = '';
  for (var i = 0; i < (dayName-1)*3; i++) {
    row += ' ';
  };
  for(var i = 1; i<=days; i++){
    var day = i<10 ? ' '+i : ''+i;
    row += day;
    if(row.length % 20 === 0){
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
