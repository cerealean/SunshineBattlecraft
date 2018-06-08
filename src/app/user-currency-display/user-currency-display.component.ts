import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-currency-display',
  templateUrl: './user-currency-display.component.html',
  styleUrls: ['./user-currency-display.component.scss']
})
export class UserCurrencyDisplayComponent implements OnInit {
  public gold: number;
  public wood: number;
  public metal: number;
  private nextTick: Date;

  constructor() {
    this.nextTick = new Date(new Date().getTime() + this.ConvertMinutesToMilliseconds(1));
  }

  ngOnInit() {
    this.gold = 0;
    this.wood = 0;
    this.metal = 0;
  }

  public OnHitZero() {
    this.nextTick = new Date(new Date().getTime() + this.ConvertMinutesToMilliseconds(1));
  }

  private ConvertMinutesToMilliseconds(minutes: number): number {
    return minutes * 60000;
  }

}
