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

function wordsOrder(text: string, arr: string[]): boolean {
    if(arr.every(elem => text.includes(elem))) {
        for (let i = 1; i < arr.length; i++) {
            if(text.indexOf(arr[i]) > text.indexOf(arr[i-1]) || arr.length === 1)
                return true;
        }   
    }
    return false;
}