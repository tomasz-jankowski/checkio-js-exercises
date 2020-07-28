/*
You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.
This is a simplified version of the Between Markers mission.

- The initial and final markers are always different.
- The initial and final markers are always 1 char size.
- The initial and final markers always exist in a string and go one after another.

Input:
    Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
Output:
    A string.

Example:
    betweenMarkers('What is >apple<', '>', '<') == 'apple'
    betweenMarkers('What is [apple]', '[', ']') == 'apple'
    betweenMarkers('What is ><', '>', '<') == ''
    betweenMarkers('[an apple]', '[', ']') == 'an apple'
*/

var betweenMarkers = (line: string, left: string, right: string): string => line.substring(line.indexOf(left)+1,line.indexOf(right));