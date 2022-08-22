const reverseString = function(string) {
    //create a new variable called reverseString
    let reverseString = "";
    //make a for loop that counts down from the length of string, and appends that char to reversestring
    for (i = string.length; i > 0; i--) {
        reverseString += string[i - 1]
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
