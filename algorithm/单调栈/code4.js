const code4 = (str, starts, ends) => {
  let left = []; // 左边
  let right = []; // 右边
  let sum = []; // 前缀和
  let res = [];

  let pre = -1; // 前面
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    pre = str[i] === '|' ? i : pre; // 当前是否是 | , 不是的话就上一个 | 的位置
    left[i] = pre; // 当前位置左边最近的就是pre
    
    num += str[i] === '*' ? 1 : 0; // 当前是否是 *
    sum[i] = num;
  }

  pre = -1;
  for (let i = str.length - 1; i>=0 ;i--) {
    pre = str[i] === '|' ? i : pre; // 当前是否是 | , 不是的话就上一个 | 的位置
    right[i] = pre;
  }

  for (let i = 0; i < starts.length; i++) {
    res[i] = stars(starts[i], ends[i], left, right, sum);
  }
  return res;
}

const stars = (start, end, left, right, sum) => {
  let l = right[start];
  let r = left[end];
  if (l === -1 || r === -1 || l >= r) {
    return 0;
  }
  return l === 0 ? sum[r] : (sum[r] - sum[l - 1]);
}