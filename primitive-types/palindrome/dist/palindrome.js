"use strict";
function palidrome(str) {
    let originalStr = str.replace(/\s/g, '');
    let reverseString = str.toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .reverse()
        .join('');
    if (originalStr === reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log("It is not a palindrome");
    }
}
palidrome("it it i");
//# sourceMappingURL=palindrome.js.map