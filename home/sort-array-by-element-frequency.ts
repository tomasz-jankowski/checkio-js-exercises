/*
Sort the given Array so that its elements end up in the decreasing frequency order, that is, the number of times they appear in elements. If two elements have the same frequency, they should end up in the same order as the first appearance in the Array.

Input:
    Array
Output:
    Array

Example:
    frequencySort([4, 6, 2, 2, 6, 4, 4, 4]) == [4, 4, 4, 4, 6, 6, 2, 2]
    frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']) == ['bob', 'bob', 'bob', 'carl', 'alex']

My comment:
    Using Map instead of Object to ensure correct order of insertion.
*/

function frequencySort(arr: any[]): any[] {
    let map = new Map();
    arr.forEach(a => {
        if(map.get(a) !== undefined)
            map.set(a, map.get(a)+1);
        else
            map.set(a, 1);
    });
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let sortedArr:any[] = [];
    sortedMap.forEach((val, key) => {
        for (let i = 0; i < val; i++) {
            sortedArr.push(key);
        }
    });
    return sortedArr;
}