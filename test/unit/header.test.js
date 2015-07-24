var header = require(process.cwd() + '/lib/header');

describe('header function', function () {
  it('should center the month name and year for January', function(){
    header('January', '2000').should.equal('    January 2000');
  })

  it('should center the month name and year for May', function(){
    header('May', '1998').should.equal('      May 1998');
  })

  it('should center the month name and year for December', function(){
    header('December', '1998').should.equal('   December 1998');
  })
})
