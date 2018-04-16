import {Observable} from "rxjs";



let button = document.createElement('button');
button.textContent = 'click';
document.body.appendChild(button);


let tableau:number[] = [0,1,2,3];

let obs = Observable.from(tableau);
let obsEvent = Observable.fromEvent(button, 'click');


obsEvent.debounceTime(200)
.switchMap(data => obs)
.subscribe(data => console.log(data));




// obs.skipWhile(data => data <= 1)
// .map(data => data+1)
// .subscribe(data => console.log(data));



// let observable:Observable<number> = Observable.create((observer) => {

//     if(false) {
//         observer.error(new Error("erreur"));
//     }
//     observer.next(0);
//     observer.next(1);
//     observer.next(2);
//     observer.complete();

// });

// observable.subscribe(data => console.log(data),
//                     error => console.error(error),
//                     () => console.log('finished'));


// let promise = new Promise(function(resolve, reject) {
    
//     if(false) {
//         resolve('is ok');//then
//     }else{
//         reject('planté');//catch
//     }
    
    
// });

// promise.then(data => console.log(data));
