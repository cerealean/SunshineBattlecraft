import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../services/ticker.service';

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
    this.nextTick = tickerService.GetNextTick();
  }

  ngOnInit() {
    this.gold = 0;
    this.wood = 0;
    this.metal = 0;
  }

  public OnHitZero() {
    this.nextTick = this.tickerService.GetNextTick();
  }

  private ConvertMinutesToMilliseconds(minutes: number): number {
    return minutes * 60000;
  }
}
