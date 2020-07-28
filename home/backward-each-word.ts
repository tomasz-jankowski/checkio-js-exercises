/*
In a given string you should reverse every word, but the words should stay in their places.

Input:
    A string.
Output:
    A string.

Example:
    backwardStringByWord('') == ''
    backwardStringByWord('world') == 'dlrow'
    backwardStringByWord('hello world') == 'olleh dlrow'
    backwardStringByWord('hello   world') == 'olleh   dlrow'
*/

function backwardStringByWord(str: string): string {
    let arr = str.split(" ");
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ')
            finalArr.unshift(arr[i]);
        else
            finalArr.push(arr[i]);
    }
    return finalArr.toString().replace(/,/g, ' ').split('').reverse().join('');
}