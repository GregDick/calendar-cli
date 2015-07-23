var should = require('chai').should();
var cp = require('child_process');

describe('CLI', function(){
  it('given no arguments should respond with the current date', function (done) {
     cp.execFile('./app.js', function (err, stdout) {
      stdout.should.equal('July\n31\n');
      done();
    });
  })
})
