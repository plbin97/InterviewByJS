export let asciiDecode = (askiiString) => {
    let reversedString = reverseString(askiiString);
    let splitedAsciiChars = splitAscii(reversedString);
    return String.fromCharCode(...splitedAsciiChars);
}

let splitAscii = (asciiEncoded) => {
    let asciiChars = [];
    let flag = 0;
    while (flag < asciiEncoded.length) {
        if (asciiEncoded[flag] === "1") {
            asciiChars.push(asciiEncoded[flag] + asciiEncoded[flag + 1] + asciiEncoded[flag + 2]);
            flag += 3;
        } else if (asciiEncoded[flag] === "0") {
            return [];
        } else {
            asciiChars.push(asciiEncoded[flag] + asciiEncoded[flag + 1]);
            flag += 2;
        }
    }
    return asciiChars;
}

let reverseString = (string) => {
    let newString = "";
    for(let char of string) {
        newString = char + newString;
    }
    return newString;
}
