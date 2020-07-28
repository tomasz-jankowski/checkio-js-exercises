// Remove all the elements before the given one from the array.

var removeAllBefore = (values: number[], b: number): number[] => (values === []) ? [] : (values.indexOf(b) === -1) ? values : values.splice(values.indexOf(b));