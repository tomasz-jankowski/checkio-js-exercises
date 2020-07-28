/*
Try to find out how many zeros a given number has at the end.

Input:
    A positive Int
Output:
    An Int.

Example:
    endZeros(0) == 1
    endZeros(1) == 0
    endZeros(10) == 1
    endZeros(101) == 0
*/
function endZeros(value) {
    var str = value.toString(), index = str.length - 1, count = 0;
    for (var i = index; i >= 0; i--) {
        (str[i] === '0') ? count++ : i = -1;
    }
    return count;
}
