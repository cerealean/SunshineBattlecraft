import { Component, OnInit, OnDestroy, ElementRef, Input } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'time-until',
  templateUrl: './time-until.component.html',
  styleUrls: ['./time-until.component.scss']
})
export class TimeUntilComponent implements OnInit, OnDestroy {
  @Input() private date: Date;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private message: string;

  ngOnInit() {
    this.counter$ = interval(1000).pipe(map((x) => {
      return Math.floor((this.date.getTime() - new Date().getTime()) / 1000);
    }));

    this.subscription = this.counter$.subscribe((x) => this.message = this.GenerateMessage(x));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private GenerateMessage(t) {
    let minutes, seconds;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }
}
