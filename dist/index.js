let a = 10;
let b = {
    abc: "abc",
    bcd: 3
};
let { abc } = b;
console.log(abc);
let anyVar; // anyVar : any 와같음
let numbers = [1, 2, 3]; // 배열
let gNumbers = [1, 2, 3]; // 제너릭 배열
let tuple = ["t", 1]; // 튜플
let tuples = [["t", 1], ["t2", 2]];
console.log(typeof tuples);
