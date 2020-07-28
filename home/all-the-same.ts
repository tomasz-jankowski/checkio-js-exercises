/*
In this mission you should check if all elements in the given Array are equal.

Input:
    Array.
Output:
    Bool.

Example:
    allTheSame([1, 1, 1]) == true
    allTheSame([1, 2, 1]) == false
    allTheSame(['a', 'a', 'a']) == true
    allTheSame([]) == true
*/

var allTheSame = (elements: any[]): boolean => elements.every(v => v === elements[0]);