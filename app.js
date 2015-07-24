#!/usr/bin/env node

var month = require('./lib/month');

if(process.argv.length > 2){
  var input = process.argv[2];

  console.log(month[input].name);
  console.log('Su Mo Tu We Th Fr Sa');
  console.log(align(0, month[input].days));
}
//if no arguments are passed
else{
  var today = new Date();
  var d = today.getDate() + '';
  var m = today.getMonth() + 1 + '';
  var y = today.getYear() + '';
  console.log(month[m].name);
  console.log(month[m].days);
}

function align(weekday, days){
  var weekday = weekday;
  var days = days;
  var string = '';
  var row = '';
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
