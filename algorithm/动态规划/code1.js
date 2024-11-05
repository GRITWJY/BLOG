
// 1. 暴力方法
const code1 = (m, n, prices) => {
  let start = Date.now();
  let values = [];
  for (const p of prices) {
    values[p[0]] = [];
    values[p[0]][p[1]] = p[2];
  }

  let dp = [];
  for (let i = 1; i <= m; i++) {
    dp[i] = [];
    for (let j = 1; j <= n; j++) {
      dp[i][j] = -1;
    }
  }

  const res = f2(m, n, values, dp);
  console.log(Date.now() - start);
  return res;
}

const f2 = (m, n, values, dp) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (dp[m][n] != -1) {
    return dp[m][n];
  }

  let ans = 0;
  // 一刀也不切
  if (values[m]) {
    if (values[m][n]) {
      ans = values[m][n];
    }
  }

  for (let split = 1; split < m; split++) {
    ans =
      Math.max(ans, f2(split, n, values, dp) + f2(m - split, n, values, dp));
  }
  for (let split = 1; split < n; split++) {
    ans =
      Math.max(ans, f2(m, split, values, dp) + f2(m, n - split, values, dp));
  }
  dp[m][n] = ans;
  return ans;
}

const createEmptyArray = (m, n) => Array.from({ length: m }, () => new Array(n).fill(null));

const code2 =  (m, n, prices) => {
  let dp = createEmptyArray(m + 1, n + 1);
  for (const p of prices) {
    dp[p[0]][p[1]] = p[2];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= (j >> 1); k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k]);
      }

      for (let k = 1; k <= (i >> 1); k++) {
        dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j]);
      }
    }
  }
  return dp[m][n];
}

console.log(code2(20, 20, [[3,2,10],[1,4,2],[4,1,3]]));