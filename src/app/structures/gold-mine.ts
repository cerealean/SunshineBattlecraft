import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class GoldMine extends Structure {
    public name = 'Gold Mine';
    public description = 'Generates gold for your community';
    public cost = new PlayerCurrency(200);
    public currencyChangeOnTick = new PlayerCurrency(10);
    public ticksToComplete = 10;
    public icon = 'fas fa-user-secret';
}
