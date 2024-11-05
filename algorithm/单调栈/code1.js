// 单调栈的基本用法
const code1 = (arr = []) => {
  if (!arr?.length) return null;
  if (!Array.isArray(arr)) return null;
  const stack = []; // 单调栈
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    while(stack.length && arr[stack.at(-1)] > arr[i]) {
      let popIdx = stack.pop();
      let leftIdx = stack.at(-1);
      res[popIdx] = {l: arr[leftIdx] || -1, r: arr[i]};
    }
    stack.push(i);
  }

  while(stack.length) {
    const popIdx = stack.pop();
    const leftIdx = stack.at(-1);
    res[popIdx] = { l: leftIdx, r: -1 }
  }
  console.log(res);
}

// 题目1
const test3 = (arr = []) => {
  if (!arr?.length) return null;
  if (!Array.isArray(arr)) return null;
  arr.push(0);
  arr.unshift(0);
  const stack = []; // 单调栈
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    while(stack.length && arr[stack.at(-1)] > arr[i]) {
      let popIdx = stack.pop();
      let leftIdx = stack.at(-1);
      max = Math.max(max, arr[popIdx] * (i - leftIdx - 1));
    }
    stack.push(i);
  }

  console.log(max);
  return max;
}


test3([2,4]);