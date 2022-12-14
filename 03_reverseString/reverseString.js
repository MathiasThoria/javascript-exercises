

const reverseString = function(string) {
    let stringTmp = "";
    console.log(string.slice((string.length)-1));
    for (let a=0; a < string.length; a++){
        stringTmp = string.slice(a,a+1) + stringTmp;        
    }
    return stringTmp;
}
//console.log(reverseString("Hola"));
// Do not edit below this line
module.exports = reverseString;
