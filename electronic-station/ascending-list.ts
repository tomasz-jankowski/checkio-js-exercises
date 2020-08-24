/*
Determine whether the sequence of elements items is ascending so that its each element is strictly larger than (and not merely equal to) the element that precedes it.

Input:
    Iterable with ints.
Output:
    Bool.

Example:
    isAscending([-5, 10, 99, 123456]) == true
    isAscending([99]) == true
    isAscending([4, 5, 6, 7, 3, 7, 9]) == false
    isAscending([]) == true
    isAscending([1, 1, 1, 1]) == false
*/

function isAscending(arr: number[]): boolean {
    // Check if array has duplicate values
    if (arr.every(r => arr.indexOf(r) === arr.lastIndexOf(r))) {
        // Sort the array
        const sorted: number[] = [...arr].sort((a, b) => a - b);
        return arr.every((v, i) => v === sorted[i]);
    }
    return false;    
}