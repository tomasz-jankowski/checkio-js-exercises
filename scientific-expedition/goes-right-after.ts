/*
In a given word you need to check if one symbol goes right after another.

Cases you should expect while solving this challenge:

    - if more than one symbol is in the list you should always count the first one
    - one of the symbols are not in the given word - your function should return False;
    - any symbol appears in a word more than once - use only the first one;
    - two symbols are the same - your function should return False;
    - the condition is case sensitive, which mease 'a' and 'A' are two different symbols.

Input:
    Three arguments. The first one is a given string, second is a symbol that shoud go first, and the third is a symbold that should go after the first one.
Output:
    A bool.

Example:
    goesAfter('world', 'w', 'o') == true
    goesAfter('world', 'w', 'r') == false
    goesAfter('world', 'l', 'o') == false
    goesAfter('panorama', 'a', 'n') == true
    goesAfter('list', 'l', 'o') == false
    goesAfter('', 'l', 'o') == false
    goesAfter('list', 'l', 'l') == false
    goesAfter('world', 'd', 'w') == false
*/

function goesAfter(text: string, first: string, second: string): boolean {
    return (
        text.indexOf(first) !== -1
        && text.indexOf(second) === text.indexOf(first)+1
    );
}