"use strict";

Set.prototype.map = function(func, context){
  const output = new Set();
  for(let value of this){
    output.add(func.call(context,value,this));
  }
  return output;
}

Set.prototype.equals = function(set){
  if(this.size !== set.size){
    return false;
  }
  for(let value of this){
    if(!set.has(value)){
      return false;
    }
  }
  return true;
}

Set.prototype.filter = function(func){
  const output = new Set();
  for(let value of this){
    if(func(value)){
      output.add(value);
    }
  }
  return output;
}

Set.prototype.reduce = function(func){
  let accum;
  for(let value of this){
    accum = func(accum, value);
  }
  return accum;
}