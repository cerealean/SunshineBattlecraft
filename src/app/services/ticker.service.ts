import { Injectable, EventEmitter } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TickEvent } from '../models/tick-event';

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  private nextTick: Date;
  private counter$: Observable<number>;
  private subscription: Subscription;
  private tickEvent = new EventEmitter<TickEvent>();

  constructor() {
    this.nextTick = this.GenerateNextTick();
    this.StartTicker();
  }

  public GetNextTick() {
    return this.nextTick;
  }

  public GetTickEvent(): EventEmitter<TickEvent> {
    return this.tickEvent;
  }

  public GetSecondsUntilNextTick(): number {
    return (this.nextTick.getTime() - new Date().getTime()) / 1000;
  }

  private GenerateNextTick() {
    return new Date(new Date().getTime() + this.ConvertMinutesToMilliseconds(.2));
  }

  private StartTicker() {
    this.counter$ = interval(1000).pipe(map(() => {
      return Math.floor(this.GetSecondsUntilNextTick());
    }));
    this.subscription = this.counter$.subscribe((timeUntil) => {
      if (timeUntil === 0) {
        this.nextTick = this.GenerateNextTick();
        this.tickEvent.emit(new TickEvent(new Date(), this.nextTick));
      }
    });
  }

  private ConvertMinutesToMilliseconds(minutes: number): number {
    return minutes * 60000;
  }
}
