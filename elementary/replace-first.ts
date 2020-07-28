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

var replaceFirst = (values: number[]): number[] => (values.length < 2) ? values : [...values.splice(1), values[0]];