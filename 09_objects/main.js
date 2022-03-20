let person = {
  name: "John Doe",
  age: 1e1
};

console.log(person, person.name, person["age"]);

person.hello = function() {
  return "My name is " + person.name + `. I'm ${person.age} years old.`;
}

console.log(person.hello());