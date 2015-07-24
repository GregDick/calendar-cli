var should = require('chai').should();
var cp = require('child_process');

describe('CLI', function(){
  it('given no arguments should respond with the current date', function (done) {
    cp.execFile('./app.js', function (err, stdout) {
      stdout.should.equal('July\n31\n');
      done();
    });
  })

  it('should ouput a calendar starting on monday given just a month', function (done) {
    cp.execFile('./app.js', ["1"], function (err, stdout) {
      stdout.should.equal('January\nSu Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31');
      done();
    })
  })

  it('should start the month on the correct day given a month and year', function (done) {
    cp.execFile('./app.js', ["8", "2013"], function(err, stdout){
      stdout.should.equal('    August 2013\nSu Mo Tu We Th Fr Sa\n             1  2  3\n 4  5  6  7  8  9 10\n11 12 13 14 15 16 17\n18 19 20 21 22 23 24\n25 26 27 28 29 30 31');
      done();
    })
  })

  it('should start the month on the correct day given a month and year', function (done) {
    cp.execFile('./app.js', ["8", "2013"], function(err, stdout){
      cp.exec('cal 8 2013', function(err1, conOut){
        stdout.should.equal(conOut);
        done();
      })
    })
  })
})
