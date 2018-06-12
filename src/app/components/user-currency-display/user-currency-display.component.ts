import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../services/ticker.service';
import { TickEvent } from '../../models/tick-event';

@Component({
  selector: 'user-currency-display',
  templateUrl: './user-currency-display.component.html',
  styleUrls: ['./user-currency-display.component.scss'],
  providers: [TickerService]
})
export class UserCurrencyDisplayComponent implements OnInit {
  public gold: number;
  public wood: number;
  public metal: number;
  private nextTick: Date;

  constructor(private tickerService: TickerService) {
    this.nextTick = this.tickerService.GetNextTick();
    this.tickerService.GetTickEvent().subscribe((tickEvent: TickEvent) => {
      this.nextTick = tickEvent.nextTick;
    });
  }

  ngOnInit() {
    this.gold = 0;
    this.wood = 0;
    this.metal = 0;
  }
}
