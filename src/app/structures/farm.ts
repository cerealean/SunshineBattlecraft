import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class Farm extends Structure {
    public name = 'Farm';
    public description = 'Generates food for your community';
    public cost = new PlayerCurrency(175);
    public currencyChangeOnTick = new PlayerCurrency(0, 0, 0, 10);
    public ticksToComplete = 10;
    public icon = 'fab fa-apple';
}
