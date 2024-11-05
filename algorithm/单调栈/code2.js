const code2 = (arr) => {
  // 1. 生成前缀和
  const sums = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    sums[i] = sums[i - 1] + arr[i];
  }

  // 2. 找出i的左右边界
  const stack = [];
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack.at(-1)] >= arr[i]) {
      let j = stack.pop();
      let left = stack.at(-1);
      max = Math.max(
        max,
        !stack.length ? sums[i - 1] : (sums[i - 1] - sums[left]) * arr[j]
      );
    }
    stack.push(i);
  }

  while (stack.length) {
    const size = arr.length;
    const j = stack.pop();
    const left = stack.at(-1);
    max = Math.max(
      max,
      !stack.length ? sums[size - 1] : (sums[size - 1] - sums[left]) * arr[j]
    );
    console.log(max, arr[j]);
  }
};

console.log(code2([2, 5, 4, 2, 4, 5, 3, 1, 2, 4]));
