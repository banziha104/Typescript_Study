class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y;
    }
}
let rec = new Rectangle(10, 100);
console.log(rec.getArea());
