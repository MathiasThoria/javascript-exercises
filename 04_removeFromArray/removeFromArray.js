const removeFromArray = function(arr, strFilter) {
    let result;
    for (let a=0; a< arguments.length; a++){
        //console.log(arguments[a+1]);
        //arr = arr.filter(elem => !((+(elem) == +(arguments[a+1])) || (elem == arguments[a+1]) ));
        arr = arr.filter(elem => !(elem === arguments[a+1]));
    }    
    return arr;
}
//console.log(removeFromArray([5,2,3],"5",3));




// Do not edit below this line
module.exports = removeFromArray;
