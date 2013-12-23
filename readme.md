Set Up
====

Extends Set.prototype with some new methods, probably don't want to extend the actual prototype in the wild but but my attempt at making a SetUp object which extends Set died in a flurry of errors related to using methods on objects they aren't allowed to be used on. Currently only works in firefox.

api
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