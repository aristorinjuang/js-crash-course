const fruits = new Map([
  ["apple", 5],
  ["banana", 3],
  ["orange", 2]
]);

console.log(fruits);

fruits.set("apple", 1);

console.log(fruits.get("apple"));

for (let fruit of fruits.entries()) {
  console.log(fruit, fruit[0], fruit[1]);
}

fruits.forEach(function(value, key) {
  console.log(key, value);
})