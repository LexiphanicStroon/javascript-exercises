const reverseString = function(string) {
    const stringArray = string.split('');
    const reversed = stringArray.reverse();
    console.log(reversed);
    const joinedReversed = reversed.join('');
    return joinedReversed;
    // return string.split("").reverse().join(""); elegant solution
};

// Do not edit below this line
module.exports = reverseString;
