// 去重
const arr = [1, 1, 2];
const arr2 = [...new Set(arr)];
console.log(arr2);

const set = new Set(arr2);
// 判断存在
console.log(set.has(1));

// 交集
const set2 = new Set([2, 3, 4]);

const set3 = new Set([...set].filter((item) => set2.has(item)));
console.log(1);
