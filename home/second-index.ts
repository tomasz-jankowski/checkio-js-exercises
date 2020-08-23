/*
You are given two strings and you have to find an index of the second occurrence of the second string in the first one.

Let's go through the first example where you need to find the second occurrence of "s" in a word "sims". It’s easy to find its first occurrence with a function indexOf which will point out that "s" is the first symbol in a word "sims" and therefore the index of the first occurrence is 0. But we have to find the second "s" which is 4th in a row and that means that the index of the second occurrence (and the answer to a question) is 3.

Input:
    Two strings.
Output:
    Int or undefined

Example:
    secondIndex("sims", "s") == 3
    secondIndex("find the river", "e") == 12
    secondIndex("hi", " ")  == undefined
*/

function secondIndex(text: string, symbol: string): number | undefined {
    const indexOfFirst = text.indexOf(symbol);
    const indexOfSecond = text.indexOf(symbol, (indexOfFirst + 1));

    return (indexOfSecond !== -1) ? indexOfSecond : undefined;
}