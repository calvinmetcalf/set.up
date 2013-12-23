"use strict";

Set.prototype.map = function(func, context){
  const output = new Set();
  const boundFunc = func.bind(context);
  for(let value of this){
    output.add(boundFunc(value,this));
  }
  return output;
};

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
};

Set.prototype.filter = function(func, context){
  const output = new Set();
  const boundFunc = func.bind(context);
  for(let value of this){
    if(boundFunc(value, this)){
      output.add(value);
    }
  }
  return output;
};

Set.prototype.reduce = function(func, accum){
  const boundFunc = func.bind(undefined);
  for(let value of this){
    if(typeof accum === 'undefined'){
      accum = value;
    }else{
      accum = boundFunc(accum, value, this);
    }
  }
  return accum;
};

Set.prototype.every = function(func, context){
  const boundFunc = func.bind(context);
  for(let value of this){
    if(!boundFunc(value, this)){
      return false;
    }
  }
  return true;
};
Set.prototype.some = function(func, context){
  const boundFunc = func.bind(context);
  for(let value of this){
    if(boundFunc(value, this)){
      return true;
    }
  }
  return false;
};

Set.prototype.merge = function(){
  const output = new Set(this);
  let i = -1;
  const len = arguments.length;
  while(++i < len){
    for(let value of arguments[i]){
      output.add(value);
    }
  }
  return output;
}
Set.prototype.append = function(){
  let i = -1;
  const len = arguments.length;
  while(++i < len){
    for(let value of arguments[i]){
      this.add(value);
    }
  }
  return this;
}