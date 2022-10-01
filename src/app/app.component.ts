import { Component, VERSION } from '@angular/core';
import {tap, timer} from "rxjs";
import {SubscriptionHandlingService} from "./subscription-handling-service.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [SubscriptionHandlingService]
})
export class AppComponent  {
  sideEffect$ = timer(0, 1000)
      .pipe(tap(console.log));

  name = 'Angular ' + VERSION.major;

  constructor(private subHandler: SubscriptionHandlingService) {
    this.subHandler
        .subscribe(this.sideEffect$)
  }
}
