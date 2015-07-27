var should = require('chai').should();
var cp = require('child_process');



describe('CLI', function(){
  it('given no arguments should respond with the current date', function () {
    testCal();
  })

  it('should handle leap years', function(){
    testCal('2 2012');
  });

  it('should handle non leap years', function(){
    testCal('2 2014');
  });

  it('should handle a 4 week month', function(){
    testCal('2 2015');
  });

  it('should handle a 5 week month', function(){
    testCal('1 2015')
  });

  it('should handle a 6 week month', function(){
    testCal('5 2015')
  });

  it('should handle printing a full year', function(){
    testCal('2015');
  });

  it('should start the month on the correct day given a month and year', function () {
    testCal('8 2013');
  })
});

describe('usage', function(){
  it('should print help message if given bad arguments', function(){

  })
});


function testCal(arg){
  var sep = arg ? ' '+arg : '';

  var goal = cp.execSync('cal' + sep).toString();
  var output = cp.execSync('./cal.js' + sep).toString();
  output.should.equal(goal);
}


