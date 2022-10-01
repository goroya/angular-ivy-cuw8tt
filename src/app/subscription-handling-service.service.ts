import {Subject, takeUntil} from "rxjs";
import {OnDestroy} from "@angular/core";

export class SubscriptionHandlingService implements OnDestroy {

  onDestroy$ = new Subject();

  subscribe(o): void {
    o.pipe(takeUntil(this.onDestroy$))
        .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

}
