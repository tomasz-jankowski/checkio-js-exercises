/*
You should return a given string in reverse order.

Input:
    A string.
Output:
    A string.

Example:
    backwardString('val') == 'lav'
    backwardString('') == ''
    backwardString('ohho') == 'ohho'
    backwardString('123456789') == '987654321'
*/
var backwardString = function (value) { return value.split('').reverse().join(''); };
