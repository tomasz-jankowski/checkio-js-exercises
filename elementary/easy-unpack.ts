// Function that gets an array and returns a tuple with 3 elements - the first, third and second element from the last for the given array.

var easyUnpack = (v: any[]) : any[] => [ v[0], v[2], v[v.length-2] ];