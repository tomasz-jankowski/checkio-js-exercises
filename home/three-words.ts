/*
You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession.

Input:
    A string with words.
Output:
    The answer as a boolean.

Example:
    threeWords("Hello World hello") == True
    threeWords("He is 123 man") == False
    threeWords("1 2 3 4") == False
    threeWords("bla bla bla bla") == True
    threeWords("Hi") == False
*/

function threeWords(str: string): boolean {
    let arr = [...str.split(" ")];
    console.log(arr);
    let count = 0;

    for (let elem of arr) {
        (!isNaN(Number(elem))) ? count = 0 : count += 1;
        if (count === 3) return true;
    }
    return false;
}