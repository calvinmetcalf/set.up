describe('SetUp',function(){
  it('should work', function(){
    var set = new Set([1,2,3]);
    var out = [];
    set.forEach(function(v){
      out.push(v);
    });
    out.sort();
    out.should.deep.equal([1,2,3]);
  });
  it('should have a map method', function(){
    var set = new Set([1,3,2]);
    var nSet = set.map(function(v){
      return v*2;
    });
    var out = [];
    nSet.forEach(function(v){
      out.push(v);
    });
    out.sort();
    out.should.deep.equal([2,4,6]);
  });
  it('should have an equals methods', function(){
    var set1 = new Set([1,2,3]);
    var set2 = new Set([3,2,1,4]);
    set2.delete(4);
    set1.equals(set2).should.equal(true);
  });
  it('should have a filter method', function(){
    var set = new Set([1,2,3]);
    set.filter(function(v){
      return v%2;
    }).size.should.equal(2);
  });
  it('should have a reduce method', function(){
    var set = new Set([1,2,3]);
    set.reduce(function(a, b){
      if(!a){
        return b;
      }
      return a+b;
    }).should.equal(6);
  });
  it('should have a reduce method which takes an accumulator', function(){
    var set = new Set([1,2,3]);
    set.reduce(function(a, b){
      return a+b;
    },2).should.equal(8);
  });
  it('should have an every method', function(){
    var set = new Set([1,2,3]);
    set.every(function(v){
      return v<4;
    }).should.equal(true);
    var set = new Set([1,2,3]);
    set.every(function(v){
      return v<3;
    }).should.equal(false);
  });
  it('should have a some method', function(){
    var set = new Set([1,2,3]);
    set.some(function(v){
      return v<3;
    }).should.equal(true);
    var set = new Set([1,2,3]);
    set.some(function(v){
      return v>3;
    }).should.equal(false);
  });
  it('should have a merge method', function(){
    var set1 = new Set([1,2,3]);
    var set2 = new Set([2,4,5]);
    var set3 = new Set([4,5,6]);
    var set4 = set1.merge(set2,set3);
    set4.size.should.equal(6);
    set4.has(1).should.equal(true);
    set4.has(2).should.equal(true);
    set4.has(3).should.equal(true);
    set4.has(4).should.equal(true);
    set4.has(5).should.equal(true);
    set4.has(6).should.equal(true);
    set4.has(7).should.equal(false);
    set1.size.should.equal(3);
  });
   it('should have an append method', function(){
    var set1 = new Set([1,2,3]);
    var set2 = new Set([2,4,5]);
    var set3 = new Set([4,5,6]);
    set1.append(set2,set3);
    set1.size.should.equal(6);
    set1.has(1).should.equal(true);
    set1.has(2).should.equal(true);
    set1.has(3).should.equal(true);
    set1.has(4).should.equal(true);
    set1.has(5).should.equal(true);
    set1.has(6).should.equal(true);
    set1.has(7).should.equal(false);
  });
});