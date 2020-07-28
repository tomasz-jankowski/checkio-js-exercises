// The first element should become the last one

var replaceFirst = (values: number[]): number[] => (values.length < 2) ? values : [...values.splice(1), values[0]];