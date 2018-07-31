import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class TreeMill extends Structure {
    public name = 'Tree Mill';
    public description = 'Generates wood for your community';
    public cost = new PlayerCurrency(180);
    public currencyChangeOnTick = new PlayerCurrency(0, 10);
    public ticksToComplete = 10;

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
