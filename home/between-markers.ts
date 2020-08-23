/*
You are given a string and two markers (the initial and final). You have to find a substring enclosed between these two markers. But there are a few important conditions:
    - The initial and final markers are always different.
    - If there is no initial marker, then the first character should be considered the beginning of a string.
    - If there is no final marker, then the last character should be considered the ending of a string.
    - If the initial and final markers are missing then simply return the whole string.
    - If the final marker comes before the initial marker, then return an empty string.

Input:
    Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
Output:
    A string.

Example:
    betweenMarkers('What is >apple<', '>', '<') == 'apple'
    betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'
*/

// @ts-ignore same function name as in simplified task
function betweenMarkers(text: string, begin: string, end: string): string {
    const beginIndex = text.indexOf(begin);
    const endIndex = text.indexOf(end);

    if(endIndex < beginIndex && endIndex !== -1)
        return '';

    const initial:number = (beginIndex === -1) ? 0 : beginIndex + begin.length;
    const final:number = (endIndex === -1) ? text.length : endIndex;

    return text.substring(initial, final);
}