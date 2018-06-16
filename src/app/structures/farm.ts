import { Structure } from './structure';
import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export class Farm extends Structure {
    public name = 'Farm';
    public description = 'Generates food for your community';
    public cost = new PlayerCurrency(175);
    public OnTick(): TickAction {
        return {CurrencyChange: new PlayerCurrency(0,0,0,10)};
    }

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
