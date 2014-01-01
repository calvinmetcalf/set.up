(function(){
"use strict";
    const ourSet = Object.create(null);
    ourSet.map = function(func, context){
      const output = new Set();
      const boundFunc = func.bind(context);
      for(let value of this){
        output.add(boundFunc(value,this));
      }
      return output;
    };

    ourSet.equals = function(set){
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

    ourSet.filter = function(func, context){
      const output = new Set();
      const boundFunc = func.bind(context);
      for(let value of this){
        if(boundFunc(value, this)){
          output.add(value);
        }
      }
      return output;
    };

    ourSet.reduce = function(func, accum){
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

    ourSet.every = function(func, context){
      const boundFunc = func.bind(context);
      for(let value of this){
        if(!boundFunc(value, this)){
          return false;
        }
      }
      return true;
    };
    ourSet.some = function(func, context){
      const boundFunc = func.bind(context);
      for(let value of this){
        if(boundFunc(value, this)){
          return true;
        }
      }
      return false;
    };

    ourSet.merge = function(...args){
      const output = new Set(this);
      args.forEach((set)=>{
        for(let value of set){
          output.add(value);
        }
      });
      return output;
    };
    ourSet.append = function(...args){
      args.forEach((set)=>{
        for(let value of set){
          this.add(value);
        }
      });
      return this;
    };

    ourSet.toArray = function(sortFunc){
      const out = [value for(value of this)];
      out.sort(sortFunc);
      return out;
    };
    window.setUp = Object.create(null);
    setUp.shim = function(){
        for(let key in ourSet){
            if(typeof Set.prototype[key] !== 'function'){
                Set.prototype[key] = ourSet[key];
            }
        }
    };
    setUp._ = function(){
        for(let key in ourSet){
            Set.prototype["_"+key] = ourSet[key];
        }
    };
}())
