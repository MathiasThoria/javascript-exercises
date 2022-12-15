const sumAll = function(start,finish) {
    let tmp=0;
//validate arguments
if (( start < 0 ) || (finish < 0) ) return "ERROR";
if ( (typeof(start) != "number") && (typeof(start) != "bigint"))
     return "ERROR";
if ( (typeof(finish) != "number")  && ( (typeof(finish)) != "bigint" ) )
    return "ERROR";
if (finish < start){
    tmp = finish;
    finish = start;
    start = tmp;
}
//recursive function to sum all numbers
if (start != finish){
    return start + sumAll(start+1,finish);
} else {
    return start;
}

};
//console.log(sumAll(1,3));
// Do not edit below this line
module.exports = sumAll;
