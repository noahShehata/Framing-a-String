// I made the following code based on basic functional programming etiquettes.


// FormatString function formats each individual words with the spacing
const FormatString = (sentence) => {
    
    // Splits the sentence into an array of words
    strArr = sentence.split(" ");
    const arrCpy = [...strArr]; // Makes a copy of the array because sort method changes the array

    maxLen = arrCpy.sort((a,b) => b.length - a.length)[0].length; // Sorts the array of words in order of decreasing length to find the max length

    // Adds the appropriate amount of spacing to each word in the array
    for (let i = 0; i < strArr.length; i++) {
        let framePadding = maxLen - strArr[i].length;
        strArr[i] = strArr[i] + " ".repeat(framePadding);
    }
}


// StringFrame function wraps each word in the sentence with *'s
const StringFrame = (sentence) => {
    
    FormatString(sentence);

    // Creates the top and bottom border
    let border = "*".repeat(maxLen + 4);

    // Prints each formatted word with border
    console.log(border);
    for (let i = 0; i < strArr.length; i++) {
        console.log("* " + strArr[i] + " *")
    }
    console.log(border);
}

// Example Test:
// StringFrame("Hello World in a frame")
