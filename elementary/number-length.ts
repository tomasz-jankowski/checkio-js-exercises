/*
You have a positive integer. Try to find out how many digits it has?

Input:
    A positive Int
Output:
    An Int.

Example:
    numberLength(10) == 2
    numberLength(0) == 1
    numberLength(4) == 1
    numberLength(44) == 2
*/

var numberLength = (value: number): number => value.toString().length;