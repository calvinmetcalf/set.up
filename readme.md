Set Up
====

Extends Set.prototype with some new methods, probably don't want to extend the actual prototype in production but who knows. Currently only works in firefox.

map
====

`Set.prototype.map` takes 2 values, a function and a context, creates a new set and iterates over your set adding the new values to the new set, function is called with an optional context value.

`Set.prototype.equals` takes another set, returns true if they are the same length the other set has all the same values as this set.

`Set.prototype.filter` returns a new filtered set.