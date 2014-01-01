Collection tools
====

Creates 2 new objects, setUp and mapUp, each with 2 methods, `setUp.shim()` and `mapUp.shim()` adds all of these to Set.prototype or Map.prototype (if they are not already there) while 'setUp._()` and `mapUp._()` add them prefixed with an underscore. Currently only works in firefox.

Set API
====

stuff from Array.prototype
------

these are all identical to their version on array, the only differences being the functions are not called with index as an argument and length is not cached at the beginning so values may be added during iteration.

- `Set.prototype.map`
- `Set.prototype.filter`
- `Set.prototype.reduce`
- `Set.prototype.some`
- `Set.prototype.every`

new stuff
-------

`Set.prototype.equals` takes another set, returns true if they are the same size and the other set has all the same values as this set.

`Set.prototype.merge` takes one or more sets as arguments, returns a new set which merges those sets to this one.

`Set.prototype.append` takes one or more sets as arguments, adds their values to the current set and returns it.

`Set.prototype.toArray` returns the values of the set, results are sorted and it takes an optional sort function.

Map API
=====

the same as the set stuff but every callback that took a value for set takes a value, key for Map

- `Map.prototype.map` returns a set
- `Map.prototype.filter` 
- `Map.prototype.reduce` function called accumulator, value, key, map, if no accumulator is given as argument first VALUE is used
- `Map.prototype.some`
- `Map.prototype.every`
- `Map.prototype.equals`
- `Map.prototype.merge` if the value is already in the map it is not replaced
- `Map.prototype.append` if the value is already in the map it is not replaced
- `Map.prototype.toObject` turns it into an object, some of the keys may be stringified
