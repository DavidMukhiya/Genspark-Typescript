function palidrome(str:string){
    let originalStr:string = str.replace(/\s/g, '')
    let reverseString:string = str.toLowerCase()
    .replace(/\s/g, '')
    // .trim()
    .split('')
    .reverse()
    .join('');
    if(originalStr === reverseString){
        console.log('It is a palindrome');
    }else{
        console.log("It is not a palindrome");
    }
}

palidrome("it it i")


