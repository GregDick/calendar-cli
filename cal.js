#!/usr/bin/env node

var month = require(process.cwd() + '/lib/month');
var align = require(process.cwd() + '/lib/align');
var reformat = require(process.cwd() + '/lib/reformat');
var zeller = require(process.cwd() + '/lib/zeller');
var leapCheck = require(process.cwd() + '/lib/leapCheck');

//if only a year is passed
if(process.argv.length===3){
  var y = process.argv[2];

  console.log('                             ' + y+'\n');
  console.log(season(y, 1));
  console.log(season(y, 4));
  console.log(season(y, 7));
  console.log(season(y, 10));

}
//if a month and year are passed
else if(process.argv.length > 3){
  var m = process.argv[2];
  var y = process.argv[3];

  console.log(output(1, m, y, month[m].days, month[m].name, false));
}
//if no arguments are passed
else{
  var today = new Date();
  var d = today.getDate() + '';
  var m = today.getMonth() + 1 + '';
  var y = today.getFullYear() + '';

  console.log(output(1, m, y, month[m].days, month[m].name, false));
}

//accepts the day month year, number of days in the month, and name of the month
//compiles all of this information to a calendar format
function output(d, m, y, days, name, twelveMonth){
  var roughDate = {
    day: d,
    month: m,
    year: y
  }
  var formatted = reformat(roughDate);
  var weekday = zeller(formatted);
  var checkedDays = leapCheck(y, days, name);

  return align(weekday, checkedDays, name, y, twelveMonth);
}


function season (y, start){
  var first = output(1, start, y, month[start].days, month[start].name, true).split('\n');
  var second = output(1, start+1, y, month[start+1].days, month[start+1].name, true).split('\n');
  var third = output(1, start+2, y, month[start+2].days, month[start+2].name, true).split('\n');

  var season = first.map(function(section, i){
    section   = lengthen(section);
    second[i] = lengthen(second[i]);
    third[i]  = lengthen(third[i]);

    return section += '  ' + second[i] + '  ' + third[i];
  })

  return season.join('\n');
}

function lengthen(chunk){
  return chunk = chunk.length===20 ? chunk : lengthen(chunk + ' ');
}




