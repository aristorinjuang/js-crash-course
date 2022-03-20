let string1 = "String 1";
let string2 = 'String 2';
let string3 = "String '3'";
let string4 = "String \"4\"";
let string5 = 'String "5"';
let string6 = string4 + " " + string5;

console.log(string1, string2, string3, string4, string5, string6);
console.log(string6.length, string6.slice(0, 10), string6.split(" "));