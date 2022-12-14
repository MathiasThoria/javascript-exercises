const repeatString = function(string,times) {
let concString ="";

if (times >= 0){
    for (let a = 0; a < times; a++){
    concString= concString + string;
    }
    return concString;
}else{
    return "ERROR";
}

}
// Do not edit below this line
module.exports = repeatString;
