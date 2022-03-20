let nums = new Set([1, 2, 3]);

console.log(nums);

nums.add(1);
nums.add(4);
nums.delete(3);

console.log(nums.size, nums.has(3))

for (let num of nums.values()) {
  console.log(num);
}