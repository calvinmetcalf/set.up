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
});