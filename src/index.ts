import { BehaviorSubject } from 'rxjs';

let subject = new BehaviorSubject("a");

subject.next("b");

subject.subscribe({
    next : value => {
        console.log(value);
    }
});

