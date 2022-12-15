const convertToCelsius = function(far) {
  let tmp=0;
  tmp = ((far-32)*(5/9));
  if (Number.isInteger(tmp)) {
    return +tmp;
  }  else{
    return +tmp.toFixed(1);
  }
};

const convertToFahrenheit = function(celcius) {
  let tmp=0;
  tmp = ((celcius*(9/5))+32);
  if (Number.isInteger(tmp)){
    return +tmp;
  }  else{
    return +tmp.toFixed(1);
  }
};
console.log(convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
