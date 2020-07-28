/*
For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).
Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.

Input:
    A string.
Output:
    A string.

Example:
    correctSentence("greetings, friends") == "Greetings, friends."
    correctSentence("Greetings, friends") == "Greetings, friends."
    correctSentence("Greetings, friends.") == "Greetings, friends."
*/

var correctSentence = (text: string): string => text.replace(text[0], text[0].toUpperCase()).split('.')[0]+'.';