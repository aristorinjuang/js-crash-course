class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `My name is ${this.name}.`;
  }
}

let person = new Person("John Doe");

console.log(person.hello());