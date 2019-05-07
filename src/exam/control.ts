/***
 * 조건문
 */

let command : number = 0;

if ( command == 0 ){

} else {

}

switch (command) {
    case 0 :
        break;
    case 1 :
        break;
    case 2 :
        break;
}


/***
 * 반복문
 */

let arr : string[] = ["l","y","j"];


for (let i =0 ; i < 3 ; i++){ // 기본적인 for 문
    console.log(i);
}

for( let a in arr){ // for .. in 문은 인덱스를 가져옮
    console.log(a);
}

for ( let a of arr){ // for .. of 문은 값을 가져옮
    console.log(a);
}

