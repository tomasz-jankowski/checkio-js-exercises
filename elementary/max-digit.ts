/*
You have a number and you need to determine which digit in this number is the biggest.

Input:
    A positive int.
Output:
    An Int (0-9).

Example:
    maxDigit(0) == 0
    maxDigit(52) == 5
    maxDigit(634) == 6
    maxDigit(1) == 1
    maxDigit(10000) == 1
*/

var maxDigit = (value: any): number => Math.max(...value.toString().split(''));