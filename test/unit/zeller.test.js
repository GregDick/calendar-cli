var should = require('chai').should();
var zeller = require(process.cwd() + '/lib/zeller');

describe('zeller function', function () {
  it('should return the correct day of the week given a day month and year', function(){
    var dat = {q:'1', m:'7', y:'2015'};
    zeller(dat).should.equal('4');
  })
})
