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
    const myObservable = new Observable((subscriberOrObserverOrConsumer) => {
      subscriberOrObserverOrConsumer.next(1);
      subscriberOrObserverOrConsumer.next(2);

      setInterval(() => {
        subscriberOrObserverOrConsumer.next(new Date());
        console.log('inside onbservable');
      }, 1000);
    });

    // Subscribing to Observable
    const subscription = myObservable.subscribe((data) => {
      console.log(data);
    });

    // Unsubscribing from Observable
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);
  }
}
