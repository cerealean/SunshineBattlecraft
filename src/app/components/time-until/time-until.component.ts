import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'time-until',
  templateUrl: './time-until.component.html',
  styleUrls: ['./time-until.component.scss']
})
export class TimeUntilComponent implements OnInit, OnDestroy {
  public minutesUntil = 0;
  public secondsUntil = 0;

  @Input() private date: Date;
  @Output() private hitZero: EventEmitter<boolean> = new EventEmitter<boolean>();
  private counter$: Observable<number>;
  private subscription: Subscription;

  ngOnInit() {
    this.counter$ = interval(1000).pipe(map(() => {
      const timeDifference = Math.floor((this.date.getTime() - new Date().getTime()) / 1000);
      if (timeDifference === 0) {
        this.hitZero.emit(true);
      }
      return timeDifference;
    }));

    this.subscription = this.counter$.subscribe((timeUntil) => this.GenerateMessage(timeUntil));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private GenerateMessage(timeUntil: number) {
    this.minutesUntil = Math.floor(timeUntil / 60) % 60;
    this.secondsUntil = timeUntil - (this.minutesUntil * 60) % 60;
  }
}
