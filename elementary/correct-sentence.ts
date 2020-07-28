// Sentences should always begin with a capital letter and end with a dot.

var correctSentence = (text: string): string => text.replace(text[0], text[0].toUpperCase()).split('.')[0]+'.';