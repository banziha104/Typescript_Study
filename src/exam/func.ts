function myFun(n1 : number, n2 : number) : number {
    return n1+n2;
}

function myFun2(n1 : number, n2? : number) :number {
    if(n2 === null){
        return n1;
    }else{
        return n1+n2;
    }
}
myFun2(1);
myFun(1,2);

function myFun3(n1 : number, n2 : number = 2) :number{
    return n1+n2;
}

myFun3(1);

function myFun4(n1 : number, ...n2 :number[]) {
    for ( let v of n2){
        console.log(v);
    }
}

myFun4(1,2,3,4,5,5,6,7);


let arrowFun = (str : string ) : string =>  {
    console.log(str);
    return str;
}

arrowFun("아아아");

let arrowFun2 : (str1 : string , str2 : string ) => string = (str1, str2) => {
    return str1+str2;
};