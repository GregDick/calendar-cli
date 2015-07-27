var should = require('chai').should();
var leapCheck = require(process.cwd() + '/lib/leapCheck.js');

describe('leapCheck function', function(){
  it('should check if year is leap year and return correct number of days in february', function(){
    var checked = leapCheck('1992', '28', 'February').should.equal(29);
  })
})
