// How many zero digits ("0") are at the beginning of the given string?

function beginningZeros(value: string): number {
    let str = value.toString(),
        len = str.length,
        count = 0;   
        
    for (var i = 0; i < len; i++) {
        ( str[i] === '0' ) ? count++ : i = ++len;
    }
    
    return count;
}