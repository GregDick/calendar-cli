var should = require('chai').should();
var reformat = require(process.cwd() + '/lib/reformat');

describe('reformat function', function(){
  it('should return m=13 and y=2014 for january 2015', function(){
    var dat = {day: '1', month: '1', year:'2015'};
    reformat(dat).should.eql({q:'1', m:'13', k:'14', j:'20'})
  })
})
