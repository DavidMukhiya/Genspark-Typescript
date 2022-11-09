function reverseString(anyStr:string){
    let revString:string ="";
    for(let i=anyStr.length -1; i>=0; i--){
        revString+=anyStr[i];
    }
    return revString;
}

console.log(reverseString("reverse"));