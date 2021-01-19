// 打家劫舍
var rob = function(nums) {
    var len = nums.length
    if (!len) return 0
    if (len === 1) return nums[0]
    if (len === 2) return Math.max(nums[0], nums[1])

    var dp = [nums[0], Math.max(nums[0], nums[1])]
    for (var i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }

    return Math.max(dp[dp.length - 1], dp[dp.length - 2])
}

// 最大正方形
var maxSquare = function(matrix) {
    if (!matrix.length) return 0

    var maxlen = 0
    var rowLen = matrix.length
    var coloLen = matrix[0].length

    for (var i = 0; i < rowLen; i++) {
        for (var j = 0; j < coloLen; j++) {
            if (matrix[i][j] === '1') {
                matrix[i][j] = Number(matrix[i][j])
                if (i !== 0 && j !== 0) {
                    matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1
                }
                maxlen = Math.max(matrix[i][j], maxlen)
            }
        }
    }
    return maxlen**2
}

// 钱币找零
var coinChange = function(coins, amount) {
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for (var i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}

// 不同路径
var uniquePaths2 = function(m, n) {
    if(m === 1 && n === 1) return 1;
    let data = [new Array(n).fill(1)].concat(new Array(m - 1).fill([1]))
    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            data[i][j] = data[i-1][j] + data[i][j-1];
        }
    }
    return data[m-1][n-1];
};

// 买卖股票的最佳时机
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    const len = prices.length
    let dp = new Array(len).fill(0)
    let min = prices[0]

    for (let i = 1; i < len; i++) {
        min = Math.min(min, prices[i])
        dp[i] = Math.max(dp[i - 1], prices[i] - min)
    }

    return dp[len - 1]
}

// 买卖股票的最佳时机II
var maxProfit2 = function(prices) {
    let dp_i_0 = 0, dp_i_1 = -Infinity;
    for(let i = 0;i < prices.length;i++){
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
}

// 剪绳子
var cuttingRope = function(n) {
    if(n <= 3) return n - 1;

    let a = n % 3; // 以3分割，取余
    let b = parseInt(n / 3);  // 以3分割可以分成几段

    if(a === 0){
        // 如果恰好等分，直接平方
        return 3 ** b;
    }else if(a === 1){
        // 如果余出1，说明有一个为4，转换为2 * 2，有b-1段为3
        return 2 * 2 * (3 ** (b - 1));
    }else{
        // 如果不余2
        return 2 * (3 ** b);
    }
}

// 跳跃游戏
var canJump = function(nums) {
    if (nums.length < 1) return true
    let target = nums.length - 1
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false
        let sum = nums[i] + i
        if (sum >= target) return true
        if (sum > max) max = sum
    }
}

// 加油站
gas =  [1, 2, 3, 5, 4, 6]
cost = [3, 4, 5, 1, 2, 2]
// curr 为当前剩余的汽油，如果为负的，则无法到达下一站，则起点设置成下一个加油站
// total为假设走完所有的加油站剩余的汽油，只有满足total>=0时才有解
var canCompleteCircuit = function(gas, cost) {
    let start = 0
    let total = 0
    let curr = 0

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i]
        if (curr < 0) {
            // 如果剩余油量为负值，则把开始位置掷为当前加油站，并赋值剩余油量
            curr = gas[i] - cost[i]
            start = i
        } else {
            // 如果当前加油站可加汽油大于到下一站消耗的汽油，则将剩余油量累加
            curr += gas[i] - cost[i]
        }
    }
    return total >= 0 ? start : -1
}

// 冒泡排序
var bubbleSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

// 快速排序
var quickSort = function(arr) {
    if(arr.length <= 1) return arr;
    let right = [],left = [],keys = arr.shift();
    for(let value of arr){
        if(value > keys){
            right.push(value)
        }else{
            left.push(value);
        }
    }
    return quickSort(left).concat(keys,quickSort(right));
}

// 插入排序
var insertSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i - 1
        if (arr[j] > arr[i]) {
            let temp = arr[i]
            while (j >= 0 && temp < arr[j]) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = temp
        }
    }
    return arr
}

// 希尔排序
var hillSort = function(arr) {
    const len = arr.length
    for (let gap = parseInt(len >> 1); gap >= 1; gap = parseInt(gap >> 1)) {
        for(let i = gap; i < len; i++){
            if(arr[i] < arr[i-gap]){
                let temp = arr[i];
                let j = i - gap;
                while(j >= 0 && arr[j] > temp){
                    arr[j+gap] = arr[j];
                    j -= gap;
                }
                arr[j+gap] = temp;
            }
        }
    }
    return arr
}

var selectSort = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        let min = Math.min(...arr.slice(i))
        let index = arr.indexOf(min)
        arr[index] = arr[i]
        arr[i] = min
    }
    return arr
}

var minNumInRArr = function(arr) {
    if (!arr || !arr.length) return 0
    
}

var missingNumber1 = function(nums) {
    const len = nums.length
    if (len < 2) Math.abs(nums[0] - 1)
    if (nums[0] !== 0) return 0

    if (nums[len - 1] - nums[0] < len) return nums[len - 1] + 1

    function asp(arr) {
        if (arr.length < 2) return
        let mid = parseFloat(arr.length >> 1)
        if (arr[mid] - arr[mid - 1] > 1) {
            return arr[mid] - 1
        } else {
            if (arr[mid - 1] - arr[0] === mid) {
                return asp(arr.slice(0, mid))
            }
            if (arr[arr.length - 1] - arr[mid] === arr.length - mid) {
                return asp(arr.slice(mid))
            }
        }
    }

    return asp(nums)
}

var missingNumber = function (nums) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // console.log(mid);
        (nums[mid] == mid) ? left = mid + 1 : right = mid - 1
    }
    return left
};

// 1  2  7  6  4  3  5
