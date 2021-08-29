const ftoc = function(temperature) {

let tempInCelsius;
tempInCelsius = (temperature -32) * (5/9);
return tempInCelsius = Math.round(tempInCelsius * 10) / 10;

};

const ctof = function(temperature) {

let tempInFahrenheit;
tempInFahrenheit = (temperature * 1.8 + 32);
return tempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;

};

module.exports = {
  ftoc,
  ctof
};
