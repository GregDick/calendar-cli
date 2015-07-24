var should = require('chai').should();
var month = require(process.cwd()+ '/lib/month')

describe('month', function(){
  describe('object', function(){
    it('should return an object with correct name', function(){
      var jan = month[1];
      var feb = month[2];
      var mar = month[3];
      var apr = month[4];
      var may = month[5];
      var jun = month[6];
      var jul = month[7];
      var aug = month[8];
      var sep = month[9];
      var oct = month[10];
      var nov = month[11];
      var dec = month[12];

      jan.should.be.an('object');
      jan.name.should.equal('January');
      feb.name.should.equal('February');
      mar.name.should.equal('March');
      apr.name.should.equal('April');
      may.name.should.equal('May');
      jun.name.should.equal('June');
      jul.name.should.equal('July');
      aug.name.should.equal('August');
      sep.name.should.equal('September');
      oct.name.should.equal('October');
      nov.name.should.equal('November');
      dec.name.should.equal('December');
    })

    it('should return an object with correct number of days', function(){
      var jan = month[1];
      var feb = month[2];
      var mar = month[3];
      var apr = month[4];
      var may = month[5];
      var jun = month[6];
      var jul = month[7];
      var aug = month[8];
      var sep = month[9];
      var oct = month[10];
      var nov = month[11];
      var dec = month[12];

      jan.should.be.an('object');
      jan.days.should.equal('31');
      feb.days.should.equal('28');
      mar.days.should.equal('31');
      apr.days.should.equal('30');
      may.days.should.equal('31');
      jun.days.should.equal('30');
      jul.days.should.equal('31');
      aug.days.should.equal('31');
      sep.days.should.equal('30');
      oct.days.should.equal('31');
      nov.days.should.equal('30');
      dec.days.should.equal('31');
    })

  })
})
