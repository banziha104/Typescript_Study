let arr = ["l", "y", "j"];
for (let i = 0; i < 3; i++) { // 기본적인 for 문
    console.log(i);
}
for (let a in arr) { // for .. in 문은 인덱스를 가져옮
    console.log(a);
}
for (let a of arr) { // for .. of 문은 값을 가져옮
    console.log(a);
}
