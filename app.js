#!/usr/bin/env node

var month = require(process.cwd() + '/lib/month');
var align = require(process.cwd() + '/lib/align');
var reformat = require(process.cwd() + '/lib/reformat');
var zeller = require(process.cwd() + '/lib/zeller');

if(process.argv.length > 2){
  var m = process.argv[2];
  var y = process.argv[3];

  console.log(month[m].name);
  var roughDate = {
    day: '1',
    month: m,
    year: y
  }
  var formatted = reformat(roughDate);
  var weekday = zeller(formatted);
  console.log(align(weekday, month[m].days));
}
//if no arguments are passed
else{
  var today = new Date();
  var d = today.getDate() + '';
  var m = today.getMonth() + 1 + '';
  var y = today.getYear() + '';
  console.log(month[m].name);
  console.log(align(0, month[m].days));
}

