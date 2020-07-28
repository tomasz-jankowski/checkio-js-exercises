/*
Find the nearest value to the given one.
You are given a list of values as Array form and a value for which you need to find the nearest one.
For example, we have the following set of numbers: 4, 7, 10, 11, 12, 17, and we need to find the nearest value to the number 9. If we sort this set in the ascending order, then to the left of number 9 will be number 7 and to the right - will be number 10. But 10 is closer than 7, which means that the correct answer is 10.

A few clarifications:
    - If 2 numbers are at the same distance, you need to choose the smallest one;
    - The set of numbers is always non-empty, i.e. the size is >=1;
    - The given value can be in this set, which means that it’s the answer;
    - The set can contain both positive and negative numbers, but they are always integers;
    - The set isn’t sorted and consists of unique numbers.

Input:
    Two arguments. A list of values in the Array form. The sought value is an int.
Output:
    Int.

Example:
    nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
    nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
    nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
    nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
    nearestValue([4, 7, 10, 11, 12, 17], 0) == 4
*/
function nearestValue(values, search) {
    values.sort(function (a, b) { return a - b; });
    var diff = Math.abs(search - values[0]);
    var num = values[0];
    values.forEach(function (val) {
        var calc = Math.abs(search - val);
        if (calc < diff) {
            diff = calc;
            num = val;
        }
    });
    return num;
}
