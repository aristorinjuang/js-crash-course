var number = 9;
var text = "Lorem ipsum.";

console.log(number, text);

number = 8
text = "Lorem ipsum updated."

console.log(number, text)

var number = 8;
var text = "Lorem ipsum redeclared.";

console.log(number, text);

if (true) {
  var scope = "No block scope.";
}

console.log(scope);

newNumber = 1;

console.log(newText);

function print() {
  console.log(number, text);

  var newText = "Lorem ipsum new.";
}

print();

console.log(newText);