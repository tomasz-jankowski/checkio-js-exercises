// Find the nearest value to the given one.

function nearestValue(values: number[], search: number): number {
    values.sort((a, b) => a-b);
    let diff = Math.abs(search - values[0]);
    let num = values[0];
    values.forEach(val => {
        let calc = Math.abs(search - val);
        if(calc < diff) {
            diff = calc;
            num = val;
        }            
    });
    return num;
}