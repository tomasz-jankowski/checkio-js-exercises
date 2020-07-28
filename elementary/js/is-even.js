/*
Check if the given number is even or not. Your function should return true if the number is even, andfalse if the number is odd.

Input:
    An int.
Output:
    A bool.

Example:
    isEven(2) == true
    isEven(5) == false
    isEven(0) == true
*/
var isEven = function (num) { return (num % 2 === 0) ? true : false; };
