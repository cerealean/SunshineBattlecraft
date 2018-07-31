import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class OreMine extends Structure {
    public name = 'Ore Mine';
    public description = 'Generates metal for your community';
    public cost = new PlayerCurrency(220);
    public currencyChangeOnTick = new PlayerCurrency(0, 0, 10, 0);
    public ticksToComplete = 10;

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
