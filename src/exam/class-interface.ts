class Rectangle{
    x : number;
    y : number;

    constructor(x: number, y: number){
        this.x = x ;
        this.y = y ;
    }
    getArea(){
        return this.x * this.y;
    }
}

abstract class abstractClass{
    public a : number;
    abstract func : (str : number) => string;

}

class absClass extends abstractClass{
    func: (str: number) => string;

}

interface HumanInterface {
    name : string
}

interface KoreanInterface {
    firstName? : string // 옵셔널 밸류
    whoAmI(str : string) : string
}

class Lee implements KoreanInterface, HumanInterface{
    firstName: string;
    name: string;

    whoAmI(str: string): string {
        return "";
    }
}

interface FunctionInterface {
    (str : string) : string
}

let functionInterface : FunctionInterface = function (str : string) : string {
    return str
}

declare function dD(str : string) : string;



