#!/usr/bin/env node

var month = require(process.cwd() + '/lib/month');
var align = require(process.cwd() + '/lib/align');

if(process.argv.length > 2){
  var input = process.argv[2];

  console.log(month[input].name);
  console.log(align(0, month[input].days));
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

