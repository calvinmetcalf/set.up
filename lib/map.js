(function(){
"use strict";
    const ourMap = Object.create(null);
    ourMap.map = function(func, context){
      const output = new Set();
      const boundFunc = func.bind(context);
      for(let [key, value] of this){
        output.add(boundFunc(value, key, this));
      }
      return output;
    };

    ourMap.equals = function(map){
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

    ourMap.filter = function(func, context){
      const output = new Map();
      const boundFunc = func.bind(context);
      for(let [key, value] of this){
        if(boundFunc(value, key, this)){
          output.set(key,value);
        }
      }
      return output;
    };

    ourMap.reduce = function(func, accum){
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

    ourMap.every = function(func, context){
      const boundFunc = func.bind(context);
      for(let [key, value] of this){
        if(!boundFunc(value, key, this)){
          return false;
        }
      }
      return true;
    };
    ourMap.some = function(func, context){
      const boundFunc = func.bind(context);
      for(let [key, value] of this){
        if(boundFunc(value, key, this)){
          return true;
        }
      }
      return false;
    };

    ourMap.merge = function(...args){
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
    ourMap.append = function(...args){
      args.forEach((map)=>{
        for(let [key, value] of map){
          if(!this.has(key)){
            this.set(key, value);
          }
        }
      });
      return this;
    }

    ourMap.toObject = function(sortFunc){
      const out = {}
      for(let [key,value] of this){
        out[key] = value;
      }
      return out;
    }
    window.mapUp = Object.create(null);
    mapUp.shim = function(){
        for(let key in ourMap){
            if(typeof Map.prototype[key] !== 'function'){
                Map.prototype[key] = ourMap[key];
            }
        }
    };
    mapUp._ = function(){
        for(let key in ourMap){
            Map.prototype["_"+key] = ourMap[key];
        }
    };
}());
