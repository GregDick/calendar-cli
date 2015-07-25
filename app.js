#!/usr/bin/env node

var month = require(process.cwd() + '/lib/month');
var align = require(process.cwd() + '/lib/align');
var reformat = require(process.cwd() + '/lib/reformat');
var zeller = require(process.cwd() + '/lib/zeller');

//if only a year is passed
if(process.argv.length===3){
  //show year calendar
}
//if a month and year are passed
else if(process.argv.length > 3){
  var m = process.argv[2];
  var y = process.argv[3];

  console.log(output(1, m, y, month[m].days, month[m].name));
}
//if no arguments are passed
else{
  var today = new Date();
  var d = today.getDate() + '';
  var m = today.getMonth() + 1 + '';
  var y = today.getFullYear() + '';

  console.log(output(d, m, y, month[m].days, month[m].name));
}

//accepts the day month year, number of days in the month, and name of the month
//compiles all of this information to a calendar format
function output(d, m, y, days, name){
  var roughDate = {
    day: d,
    month: m,
    year: y
  }
  var formatted = reformat(roughDate);
  var weekday = zeller(formatted);
  return align(weekday, days, name, y);
}

