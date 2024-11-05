const code3 = (matrix) => {
  if (!matrix || !matrix.length || !matrix[0]?.length) {
    return 0;
  }
  // 以每一行为基础
  const row = matrix.length;
  const col = matrix[0].length;

  const arr = [];
  let max = 0;

  for (let i = 0; i < row; i++) {

    // 遍历每一行的元素
    for (let j = 0; j < col; j++) {
      arr[j] = matrix[i][j] === '0' ? 0 : ((arr[j] || 0) + 1);
    }
    max = Math.max(max, findMaxMatrix(arr));
  }
  return max;
}


// 在这个数据里面， 找到最大面积
const findMaxMatrix = (arr) => {
  const stack = [];
  let max = 0;

  for (let i = 0; i < arr.length; i++) {

    while(stack.length && arr[stack.at(-1)] >= arr[i]) {
      const rightIdx = i;
      const curIdx = stack.pop();
      const leftIdx = !stack.length ? - 1 : stack.at(-1);
      max = Math.max(max, (rightIdx - leftIdx - 1) * arr[curIdx])
    }
    stack.push(i);
  }

  while(stack.length) {
    const curIdx = stack.pop();
    const rightIdx = arr.length;
    const leftIdx = !stack.length ? -1 : stack.at(-1);
    max = Math.max(max, (rightIdx - leftIdx - 1) * arr[curIdx])
  }
  return max;
}

console.log(code3([[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]))