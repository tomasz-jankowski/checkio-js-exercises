/*
You are the beginning of a password series. Every mission will be based on the previous one. Going forward the missions will become slightly more complex.
In this mission you need to create a password verification function.
Those are the verification conditions:
    - the length should be bigger than 6.

Input:
    A string.
Output:
    A bool.

Example:
    isAcceptablePassword('short') == false
    isAcceptablePassword('muchlonger') == true
    isAcceptablePassword('ashort') == false
*/
var isAcceptablePassword = function (password) { return (password.length > 6) ? true : false; };
