import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class Barracks extends Structure {
    public name = 'Barracks';
    public description = 'A barracks to create fighting units!';
    public cost = new PlayerCurrency(500, 150, 100, 100);
    public currencyChangeOnTick = new PlayerCurrency(-10);
    public ticksToComplete = 13;

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
