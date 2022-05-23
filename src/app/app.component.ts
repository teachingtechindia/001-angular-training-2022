import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    // const p = new Promise((resolve, reject) => {
    //   console.log('Promise started');
    //   resolve('Promise resolved');
    // });

    // p.then((data) => {
    //   console.log('Promise resolved with data: ', data);
    // });

    // Creating Observable
    const myObservable$ = new Observable((subscriberOrObserverOrConsumer) => {
      let count = 0;

      subscriberOrObserverOrConsumer.next(count++);
      subscriberOrObserverOrConsumer.next(count++);

      // const interval1 = setInterval(() => {
      //   if (count < 3) {
      //     subscriberOrObserverOrConsumer.error('Sometime went wrong');
      //   } else if (count < 5) {
      //     subscriberOrObserverOrConsumer.next(count++);
      //   } else {
      //     subscriberOrObserverOrConsumer.complete();
      //   }
      // }, 1000);

      const intervalInstance = setInterval(() => {
        subscriberOrObserverOrConsumer.next(count++);
        console.log('sending count: ', count);
      }, 1000);

      // Observable teardown function
      return () => {
        console.log('Observable teardown function called');
        clearInterval(intervalInstance);
      };
    });

    // Subscribing to Observable
    const subscription = myObservable$.subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
      () => console.log('Observable completed')
    );

    // Unsubscribing from Observable
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed');
    }, 5000);
  }
}
