describe('Set',function(){
  describe('shim version',function(){
    setUp.shim();
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
    it('should have a union method', function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([2,4,5]);
      var set3 = new Set([4,5,6]);
      var set4 = set1.union(set2,set3);
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
     it('should have a toArray method', function(){
      var set1 = new Set([1,2,3,4,5,6,7]);
      var set2 = new Set([7,6,5,4,2,1]);
      set2.add(3);
      set1.toArray().should.deep.equal(set2.toArray());
     });
     it('should have a toArray method which takes sort',function(){
       var set1 = new Set([1,2,3,4,5,6,7,8,9,10,11]);
       set1.toArray().should.deep.equal([1,10,11,2,3,4,5,6,7,8,9]);
       set1.toArray(function(a,b){
        return a - b;
       }).should.deep.equal([1,2,3,4,5,6,7,8,9,10,11]);
     });
     it('should have an intersection method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1.intersection(set2);
      set3.size.should.equal(1);
      set3.has(3).should.equal(true);
     });
     it('should have an xor method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1.xor(set2);
      set3.size.should.equal(4);
      set3.has(3).should.equal(false);
      set3.has(1).should.equal(true);
      set3.has(2).should.equal(true);
      set3.has(4).should.equal(true);
      set3.has(5).should.equal(true);
     });
     it('should have an symmetricDifference method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1.symmetricDifference(set2);
      set3.size.should.equal(4);
      set3.has(3).should.equal(false);
      set3.has(1).should.equal(true);
      set3.has(2).should.equal(true);
      set3.has(4).should.equal(true);
      set3.has(5).should.equal(true);
     });
     it('should have compliment method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1.compliment(set2);
      set3.size.should.equal(2);
      set1.size.should.equal(3);
      set2.size.should.equal(3);
      set3.has(3).should.equal(false);
      set3.has(1).should.equal(true);
      set3.has(2).should.equal(true);
    });
  });
  describe('underscore version',function(){
    setUp._();
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
      var nSet = set._map(function(v){
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
      set1._equals(set2).should.equal(true);
    });
    it('should have a filter method', function(){
      var set = new Set([1,2,3]);
      set._filter(function(v){
        return v%2;
      }).size.should.equal(2);
    });
    it('should have a reduce method', function(){
      var set = new Set([1,2,3]);
      set._reduce(function(a, b){
        if(!a){
          return b;
        }
        return a+b;
      }).should.equal(6);
    });
    it('should have a reduce method which takes an accumulator', function(){
      var set = new Set([1,2,3]);
      set._reduce(function(a, b){
        return a+b;
      },2).should.equal(8);
    });
    it('should have an every method', function(){
      var set = new Set([1,2,3]);
      set._every(function(v){
        return v<4;
      }).should.equal(true);
      var set = new Set([1,2,3]);
      set._every(function(v){
        return v<3;
      }).should.equal(false);
    });
    it('should have a some method', function(){
      var set = new Set([1,2,3]);
      set._some(function(v){
        return v<3;
      }).should.equal(true);
      var set = new Set([1,2,3]);
      set._some(function(v){
        return v>3;
      }).should.equal(false);
    });
    it('should have a merge method', function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([2,4,5]);
      var set3 = new Set([4,5,6]);
      var set4 = set1._merge(set2,set3);
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
    it('should have a union method', function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([2,4,5]);
      var set3 = new Set([4,5,6]);
      var set4 = set1._union(set2,set3);
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
      set1._append(set2,set3);
      set1.size.should.equal(6);
      set1.has(1).should.equal(true);
      set1.has(2).should.equal(true);
      set1.has(3).should.equal(true);
      set1.has(4).should.equal(true);
      set1.has(5).should.equal(true);
      set1.has(6).should.equal(true);
      set1.has(7).should.equal(false);
    });
     it('should have a toArray method', function(){
      var set1 = new Set([1,2,3,4,5,6,7]);
      var set2 = new Set([7,6,5,4,2,1]);
      set2.add(3);
      set1._toArray().should.deep.equal(set2.toArray());
     });
     it('should have a toArray method which takes sort',function(){
       var set1 = new Set([1,2,3,4,5,6,7,8,9,10,11]);
       set1._toArray().should.deep.equal([1,10,11,2,3,4,5,6,7,8,9]);
       set1._toArray(function(a,b){
        return a - b;
       }).should.deep.equal([1,2,3,4,5,6,7,8,9,10,11]);
     });
     it('should have an intersection method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1._intersection(set2);
      set3.size.should.equal(1);
      set3.has(3).should.equal(true);
     });
     it('should have an xor method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1._xor(set2);
      set3.size.should.equal(4);
      set3.has(3).should.equal(false);
      set3.has(1).should.equal(true);
      set3.has(2).should.equal(true);
      set3.has(4).should.equal(true);
      set3.has(5).should.equal(true);
     });
     it('should have an symmetricDifference method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1._symmetricDifference(set2);
      set3.size.should.equal(4);
      set3.has(3).should.equal(false);
      set3.has(1).should.equal(true);
      set3.has(2).should.equal(true);
      set3.has(4).should.equal(true);
      set3.has(5).should.equal(true);
     });
     it('should have compliment method',function(){
      var set1 = new Set([1,2,3]);
      var set2 = new Set([3,4,5]);
      var set3 = set1._compliment(set2);
      set3.size.should.equal(2);
      set1.size.should.equal(3);
      set2.size.should.equal(3);
      set3.has(3).should.equal(false);
      set3.has(1).should.equal(true);
      set3.has(2).should.equal(true);
    });
  });
});

describe('Map',function(){
  describe('shim version',function(){
    mapUp.shim();
    it('should work', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var out = []
      map.forEach(function(v,k){
        out.push([k,v]);
      });
      out.sort();
      out.should.deep.equal([[1,'a'],[2,'b'],[3,'c']]);
    });
    it('should have a map method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var nMap = map.map(function(v, k){
        return [k*2,v];
      });
      var out = [];
      nMap.forEach(function(v){
        out.push(v);
      });
      out.sort();
      out.should.deep.equal([[2,'a'],[4,'b'],[6,'c']]);
    });
    it('should have an equals methods', function(){
      var map1 = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var map2 = new Map([[4,'d'],[1,'a'],[2,'b'],[3,'c']]);
      map1.equals(map2).should.equal(false);
      map2.delete(4);
      map1.equals(map2).should.equal(true);
    });
    it('should have a filter method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.filter(function(v,k){
        return k%2 && v!=='c';
      }).size.should.equal(1);
    });
    it('should have a reduce method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.reduce(function(a, v, k){
        if(a==='a'){
          a = 1;
        }
        if(v ==='c'){
          return a+6;
        }
        return a+k;
      }).should.equal(9);
    });
    it('should have a reduce method which takes an accumulator', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.reduce(function(a, c, b){
        return a+b;
      },2).should.equal(8);
    });
    it('should have an every method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.every(function(v,k){
        return k<4;
      }).should.equal(true);
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.every(function(v,k){
        return k<3;
      }).should.equal(false);
    });
    it('should have a some method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.some(function(v, k){
        return k<3;
      }).should.equal(true);
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map.some(function(v,k){
        return k>3;
      }).should.equal(false);
    });
    it('should have a merge method', function(){
      var map1 = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var map2 = new Map([[2,'d'],[4,'d'],[5,'e']]);
      var map3 = new Map([[4,'z'],[5,'9'],[6,'f']]);
      var map4 = map1.merge(map2,map3);
      map4.size.should.equal(6);
      map4.get(1).should.equal('a');
      map4.get(2).should.equal('b');
      map4.get(3).should.equal('c');
      map4.get(4).should.equal('d');
      map4.get(5).should.equal('e');
      map4.get(6).should.equal('f');
      map4.has(7).should.equal(false);
      map1.size.should.equal(3);
    });
     it('should have an append method', function(){
      var map1 = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var map2 = new Map([[2,'d'],[4,'d'],[5,'e']]);
      var map3 = new Map([[4,'z'],[5,'9'],[6,'f']]);
      map1.append(map2,map3);
      map1.size.should.equal(6);
      map1.get(1).should.equal('a');
      map1.get(2).should.equal('b');
      map1.get(3).should.equal('c');
      map1.get(4).should.equal('d');
      map1.get(5).should.equal('e');
      map1.get(6).should.equal('f');
      map1.has(7).should.equal(false);
    });
     it('should have a toObject method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var obj = {1:'a',2:'b',3:'c'}
      map.toObject().should.deep.equal(obj);
     });
  });
describe('underscore version',function(){
    mapUp._();
    it('should work', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var out = []
      map.forEach(function(v,k){
        out.push([k,v]);
      });
      out.sort();
      out.should.deep.equal([[1,'a'],[2,'b'],[3,'c']]);
    });
    it('should have a map method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var nMap = map._map(function(v, k){
        return [k*2,v];
      });
      var out = [];
      nMap.forEach(function(v){
        out.push(v);
      });
      out.sort();
      out.should.deep.equal([[2,'a'],[4,'b'],[6,'c']]);
    });
    it('should have an equals methods', function(){
      var map1 = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var map2 = new Map([[4,'d'],[1,'a'],[2,'b'],[3,'c']]);
      map1._equals(map2).should.equal(false);
      map2.delete(4);
      map1._equals(map2).should.equal(true);
    });
    it('should have a filter method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._filter(function(v,k){
        return k%2 && v!=='c';
      }).size.should.equal(1);
    });
    it('should have a reduce method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._reduce(function(a, v, k){
        if(a==='a'){
          a = 1;
        }
        if(v ==='c'){
          return a+6;
        }
        return a+k;
      }).should.equal(9);
    });
    it('should have a reduce method which takes an accumulator', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._reduce(function(a, c, b){
        return a+b;
      },2).should.equal(8);
    });
    it('should have an every method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._every(function(v,k){
        return k<4;
      }).should.equal(true);
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._every(function(v,k){
        return k<3;
      }).should.equal(false);
    });
    it('should have a some method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._some(function(v, k){
        return k<3;
      }).should.equal(true);
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      map._some(function(v,k){
        return k>3;
      }).should.equal(false);
    });
    it('should have a merge method', function(){
      var map1 = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var map2 = new Map([[2,'d'],[4,'d'],[5,'e']]);
      var map3 = new Map([[4,'z'],[5,'9'],[6,'f']]);
      var map4 = map1._merge(map2,map3);
      map4.size.should.equal(6);
      map4.get(1).should.equal('a');
      map4.get(2).should.equal('b');
      map4.get(3).should.equal('c');
      map4.get(4).should.equal('d');
      map4.get(5).should.equal('e');
      map4.get(6).should.equal('f');
      map4.has(7).should.equal(false);
      map1.size.should.equal(3);
    });
     it('should have an append method', function(){
      var map1 = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var map2 = new Map([[2,'d'],[4,'d'],[5,'e']]);
      var map3 = new Map([[4,'z'],[5,'9'],[6,'f']]);
      map1._append(map2,map3);
      map1.size.should.equal(6);
      map1.get(1).should.equal('a');
      map1.get(2).should.equal('b');
      map1.get(3).should.equal('c');
      map1.get(4).should.equal('d');
      map1.get(5).should.equal('e');
      map1.get(6).should.equal('f');
      map1.has(7).should.equal(false);
    });
     it('should have a toObject method', function(){
      var map = new Map([[1,'a'],[2,'b'],[3,'c']]);
      var obj = {1:'a',2:'b',3:'c'}
      map._toObject().should.deep.equal(obj);
     });
  });
});
