// How many zeros are at the end?

function endZeros(value: number): number {
    let str = value.toString(),
        index = str.length-1,
        count = 0;   
        
    for (var i = index; i >= 0; i--) {
        ( str[i] === '0' ) ? count++ : i = -1;
    }
    
    return count;
}