"use strict";

Map.prototype.map = function(func, context){
  const output = new Set();
  const boundFunc = func.bind(context);
  for(let [key, value] of this){
    output.add(boundFunc(value, key, this));
  }
  return output;
};

Map.prototype.equals = function(map){
  if(this.size !== map.size){
    return false;
  }
  for(let [key, value] of this){
    if(!map.has(key) || map.get(key)!==value){
      return false;
    }
  }
  return true;
};

Map.prototype.filter = function(func, context){
  const output = new Map();
  const boundFunc = func.bind(context);
  for(let [key, value] of this){
    if(boundFunc(value, key, this)){
      output.set(key,value);
    }
  }
  return output;
};

Map.prototype.reduce = function(func, accum){
  const boundFunc = func.bind(undefined);
  for(let [key, value] of this){
    if(typeof accum === 'undefined'){
      accum = value;
    }else{
      accum = boundFunc(accum, value, key, this);
    }
  }
  return accum;
};

Map.prototype.every = function(func, context){
  const boundFunc = func.bind(context);
  for(let [key, value] of this){
    if(!boundFunc(value, key, this)){
      return false;
    }
  }
  return true;
};
Map.prototype.some = function(func, context){
  const boundFunc = func.bind(context);
  for(let [key, value] of this){
    if(boundFunc(value, key, this)){
      return true;
    }
  }
  return false;
};

Map.prototype.merge = function(...args){
  const output = new Map(this);
  args.forEach((map)=>{
    for(let [key, value] of map){
      if(!output.has(key)){
        output.set(key, value);
      }
    }
  });
  return output;
}
Map.prototype.append = function(...args){
  args.forEach((map)=>{
    for(let [key, value] of map){
      if(!this.has(key)){
        this.set(key, value);
      }
    }
  });
  return this;
}

Map.prototype.toObject = function(sortFunc){
  const out = {}
  for(let [key,value] of this){
    out[key] = value;
  }
  return out;
}