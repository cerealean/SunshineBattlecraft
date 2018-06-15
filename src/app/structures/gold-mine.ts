import { Structure } from './structure';
import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export class GoldMine extends Structure {
    public name = 'Gold Mine';
    public description = 'Generates gold for your community';
    public cost = new PlayerCurrency(10, 20, 20, 0);
    public OnTick(): TickAction {
        const playerCurrency = new PlayerCurrency();
        playerCurrency.gold = 10;
        
        return {CurrencyChange: playerCurrency};
    }

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
