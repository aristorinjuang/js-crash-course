let key = 1;

if (key == 1) {
  console.log("one");
} else if (key == 2) {
  console.log("two");
} else {
  console.log("It is a number.");
}

switch (key) {
  case 1:
    console.log("one");

    break;
  case 2:
    console.log("two");

    break;
  default:
    console.log("It is a number.");
}