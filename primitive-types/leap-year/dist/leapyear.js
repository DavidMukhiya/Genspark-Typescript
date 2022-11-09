"use strict";
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 !== year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}
let year = 4000;
checkLeapYear(year);
