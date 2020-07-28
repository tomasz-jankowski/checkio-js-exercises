/*
In a given array the first element should become the last one. An empty array or array with only one element should stay the same.

Input:
    Array.
Output:
    Array.

Example:
    replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1]
    replaceFirst([1]) == [1]
    replaceFirst([]) == []
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var replaceFirst = function (values) { return (values.length < 2) ? values : __spreadArrays(values.splice(1), [values[0]]); };
