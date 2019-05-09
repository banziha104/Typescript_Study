"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let subject = new rxjs_1.BehaviorSubject("a");
subject.next("b");
subject.subscribe({
    next: value => {
        console.log(value);
    }
});
