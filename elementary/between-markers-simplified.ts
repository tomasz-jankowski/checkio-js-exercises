// Find a substring between markers

var betweenMarkers = (line: string, left: string, right: string): string => line.substring(line.indexOf(left)+1,line.indexOf(right));