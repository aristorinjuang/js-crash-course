let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

do {
  console.log("This would be an infinity loop if it were true.")
}
while (false);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let nums = [3, 2, 1];

for (let num in nums) {
  console.log(num, nums[num]);
}

for (let num of nums) {
  console.log(num);
}