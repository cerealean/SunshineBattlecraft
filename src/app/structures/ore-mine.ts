import { Structure } from './structure';
import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export class OreMine extends Structure {
    public name = 'Ore Mine';
    public description = 'Generates metal for your community';
    public cost = new PlayerCurrency(220);
    public OnTick(): TickAction {
        const playerCurrency = new PlayerCurrency();
        playerCurrency.metal = 10;
        
        return {CurrencyChange: playerCurrency};
    }

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
