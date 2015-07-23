#!/usr/bin/env node

var month = require('./lib/month');

if(process.argv.length < 2){
  var input = process.argv[2];

  console.log(month[input].name);
  console.log(month[input].days);
}else{
  var today = new Date();
  var d = today.getDate() + '';
  var m = today.getMonth() + 1 + '';
  var y = today.getYear() + '';
  console.log(month[m].name);
  console.log(month[m].days);
}
