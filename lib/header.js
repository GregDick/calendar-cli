var header = function (monthName, y, twelveMonth) {
  var title = twelveMonth ? monthName : monthName + ' ' + y;
  var l = title.length;
  var spaces = (20 - l) / 2 -1;
  var empty = ' ';
  var extra = twelveMonth ? ' ' : '';
  for(var i = 0; i<=spaces; i++){
    title = empty.concat(title) + extra;
  }
  return title + '\n';
}

module.exports = header;
