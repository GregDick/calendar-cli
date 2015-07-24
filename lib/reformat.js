var reformat = function (obj) {
  var reformed = {};
  reformed.q = obj.day;
  //convert strings to ints
  for(var key in obj){
    obj[key] = obj[key] * 1;
  }
  obj.month = obj.month < 3 ? obj.month + 12 : obj.month;
  obj.year = obj.month > 12 ? obj.year - 1 : obj.year;
  reformed.m = obj.month + '';
  reformed.k = obj.year % 100 + '';
  reformed.j = Math.floor(obj.year / 100) + '';
  return reformed;
}

module.exports = reformat;
