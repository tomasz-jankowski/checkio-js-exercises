/*
You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.

Input:
    A string, that consist of digits.
Output:
    An Int.

Example:
    beginningZeros('100') == 0
    beginningZeros('001') == 2
    beginningZeros('100100') == 0
    beginningZeros('001001') == 2
    beginningZeros('012345679') == 1
    beginningZeros('0000') == 4
*/
function beginningZeros(value) {
    var str = value.toString(), len = str.length, count = 0;
    for (var i = 0; i < len; i++) {
        (str[i] === '0') ? count++ : i = ++len;
    }
    return count;
}
