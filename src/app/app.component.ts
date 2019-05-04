import { Component } from '@angular/core';
import { Observable } from 'rxjs';


function sequenceSubscriber(observer) {
  const seq = [1, 2, 3];
  let timeoutId;

  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doSequence(arr, idx) {
    timeoutId = setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        doSequence(arr, ++idx);
      }
    }, 1000);
  }

  doSequence(seq, 0);

  // Unsubscribe should clear the timeout to stop execution
  return {
    unsubscribe() {
      clearTimeout(timeoutId);
      
    }
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  handleChildButtonClicked($event) {
    console.log(JSON.stringify($event));
    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }
  parentData = {
    name: "sayan",
    empId: 16306
  }
}
