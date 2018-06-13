import { Structure } from './structure';
import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export class Farm extends Structure {
    public name = 'Farm';
    public description = 'Generates food for your community';
    public OnTick(): TickAction {
        const playerCurrency = new PlayerCurrency();
        playerCurrency.food = 10;
        
        return {CurrencyChange: playerCurrency};
    }

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
