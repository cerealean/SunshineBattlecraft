import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class TownCenter extends Structure {
    name = 'Town Center';
    description = 'The center of your village. Also generates gold for your community.';
    ticksToComplete = 0;
    cost = new PlayerCurrency(0, 0, 0, 0);
    currencyChangeOnTick = new PlayerCurrency(10, 0, 0, 0);
    icon = 'fas fa-home';
}
