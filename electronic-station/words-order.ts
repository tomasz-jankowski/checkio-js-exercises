/*
You have a text and a list of words. You need to check if the words in a list appear in the same order as in the given text.

Cases you should expect while solving this challenge:
    - a word from the list is not in the text - your function should return False;
    - any word can appear more than once in a text - use only the first one;
    - two words in the given list are the same - your function should return False;
    - the condition is case sensitive, which means 'hi' and 'Hi' are two different words;
    - the text includes only English letters and spaces.

Input:
    Two arguments. The first one is a given text, the second is a list of words.
Output:
    A bool.

Example:
    wordsOrder('hi world im here', ['world', 'here']) == true
    wordsOrder('hi world im here', ['here', 'world']) == false
    wordsOrder('hi world im here', ['world']) == true
    wordsOrder('hi world im here', ['world', 'here', 'hi']) == false
    wordsOrder('hi world im here', ['world', 'im', 'here']) == true
    wordsOrder('hi world im here', ['world', 'hi', 'here']) == false
    wordsOrder('hi world im here', ['world', 'world']) == false
    wordsOrder('hi world im here', ['country', 'world']) == false
    wordsOrder('hi world im here', ['wo', 'rld']) == false
    wordsOrder('',                 ['world', 'here']) == false
*/

function wordsOrder(text: string, arr: string[]): any {
    let arrFromText: string[] = text.split(' ');
    let indexes: number[] = [];
    // Check if text contains every array element 
    // @ts-ignore property 'includes' does not exist on type 'string[]'
    if (arr.every(r => arrFromText.includes(r))) {
        // Check if all array elements are unique
        if (arr.every(r => arr.indexOf(r) === arr.lastIndexOf(r))) {
            arr.forEach(a => indexes.push(arrFromText.indexOf(a)));
            return indexes.every((v, i, a) => !i || a[i-1] <= v)
        }
    }
    return false;
}