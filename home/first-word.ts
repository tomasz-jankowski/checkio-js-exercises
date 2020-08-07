/*
You are given a string where you have to find its first word.

When solving a task pay attention to the following points:
    - There can be dots and commas in a string.
    - A string can start with a letter or, for example, a dot or space.
    - A word can contain an apostrophe and it's a part of a word.
    - The whole text can be represented with one word and that's it.

Input:
    A string.
Output:
    A string.

Example:
    firstWord("Hello world") == "Hello"
    firstWord("greetings, friends") == "greetings"
*/

var firstWord = (str: string): string =>
    str
        .split('.')
        .join(' ')
        .split(',')
        .join(' ')
        .split(' ')
        .filter(p => p !== '')[0];