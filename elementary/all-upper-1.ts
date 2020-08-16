/*
Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return True.

Input:
    A string.
Output:
    A boolean.

Example:
    isAllUpper('ALL UPPER') == true
    isAllUpper('all lower') == false
    isAllUpper('mixed UPPER and lower') == false
    isAllUpper('') == true
*/

var isAllUpper = (text: string): boolean => text === text.toUpperCase();