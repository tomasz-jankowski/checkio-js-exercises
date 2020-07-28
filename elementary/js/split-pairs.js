/*
Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').

Input:
    A string.
Output:
    An array of strings.

Example:
    splitPairs('abcd') == ['ab', 'cd']
    splitPairs('abc') == ['ab', 'c_']
    splitPairs('abcdf') == ['ab', 'cd', 'f_']
    splitPairs('a') == ['a_']
    splitPairs('') == []
*/
function splitPairs(text) {
    var arr = [];
    for (var i = 0; i < text.length; i++) {
        if (i % 2 === 1)
            arr.push("" + text[i - 1] + text[i]);
        else if (i === text.length - 1)
            arr.push(text[i] + "_");
    }
    return arr;
}
