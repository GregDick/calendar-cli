var should = require('chai').should();
var align = require(process.cwd() + '/lib/align');

describe('align', function () {
  it('should print the current month in the correct format', function () {
    align(4, 31).should.equal('     July 2015\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30 31')
  })

})
