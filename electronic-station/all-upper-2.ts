function isAllUpper(str: string): boolean {
    if (str === '' || /^[0-9 ]+$/.test(str))
        return false;
    if(!/^\s+$/.test(str))
        return str.split('').every(e => e === e.toUpperCase());
}