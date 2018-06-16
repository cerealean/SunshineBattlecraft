import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../services/ticker.service';
import { TickEvent } from '../../models/tick-event';
import { PlayerControllerService } from '../../services/player-controller.service';

@Component({
  selector: 'user-currency-display',
  templateUrl: './user-currency-display.component.html',
  styleUrls: ['./user-currency-display.component.scss']
})
export class UserCurrencyDisplayComponent implements OnInit {
  get nextTick(): Date {
    return this.tickerService.nextTick;
  }

  get gold(): number{
    return this.playerControllerService.playerCurrency.gold;
  }

  get wood(): number{
    return this.playerControllerService.playerCurrency.wood;
  }

  get metal(): number{
    return this.playerControllerService.playerCurrency.metal;
  }

  get food(): number{
    return this.playerControllerService.playerCurrency.food;
  }

  constructor(
    private tickerService: TickerService, 
    private playerControllerService: PlayerControllerService) {}

  ngOnInit() {}
}
