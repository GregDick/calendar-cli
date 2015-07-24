var header = function (monthName, y) {
  var title = monthName + ' ' + y;
  var l = title.length;
  var spaces = (20 - l) / 2 -1;
  console.log(spaces);
  var empty = ' ';
  for(var i = 0; i<=spaces; i++){
    title = empty.concat(title);
  }
  return title;
}

module.exports = header;
