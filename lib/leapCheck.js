var checked = function(y, days, name){
  //check for leap year ? if february add 1 to days
  if(name==='February' && y%4===0){
    if(y%100===0){
      if(y%400===0){
        days = days * 1 + 1;
      }
    }else{
      days = days * 1 + 1;
    }
  }

  return days;
}

module.exports = checked;
