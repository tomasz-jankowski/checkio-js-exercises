// Split the string into pairs of two characters.

function splitPairs(text: string): string[] {
    let arr = [];
    for (var i = 0; i < text.length; i++) {
        if (i % 2 === 1)
            arr.push(`${text[i-1]}${text[i]}`);
        else if (i === text.length - 1)
            arr.push(`${text[i]}_`);
    }
    return arr;
}