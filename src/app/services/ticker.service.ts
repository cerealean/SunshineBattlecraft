import { Injectable, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TickEvent } from '../models/tick-event';

@Injectable({
  providedIn: 'root'
})
export class TickerService implements OnInit, OnDestroy {
  private nextTick: Date;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private tickEvent = new EventEmitter<TickEvent>();

  public GetTickEvent(): EventEmitter<TickEvent> {
    return this.tickEvent;
  }

  ngOnDestroy(): void {
    this.nextTick = this.GetNextTick();
    this.StartTicker();
  }

  ngOnInit(): void {
    this.StopTicker();
  }

  private GetNextTick() {
    return new Date(new Date().getTime() + this.ConvertMinutesToMilliseconds(1));
  }

  private StartTicker() {
    this.counter$ = interval(1000).pipe(map(() => {
      return Math.floor((this.nextTick.getTime() - new Date().getTime()) / 1000);
    }));
    this.subscription = this.counter$.subscribe((timeUntil) => {
      if (timeUntil === 0) {
        this.tickEvent.emit(new TickEvent(new Date()));
        this.nextTick = this.GetNextTick();
      }
    });
  }

  private StopTicker() {
    this.subscription.unsubscribe();
    this.counter$ = null;
  }

  private ConvertMinutesToMilliseconds(minutes: number): number {
    return minutes * 60000;
  }
}
