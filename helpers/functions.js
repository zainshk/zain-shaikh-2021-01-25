const numberWithCommas = (number) => 
String(number)
.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

module.exports = { numberWithCommas }