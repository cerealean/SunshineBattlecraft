import { Structure } from './structure';
import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export class TreeMill extends Structure { 
    public name = "Tree Mill";
    public description = "Generates wood for your community";
    public cost = new PlayerCurrency(25, 50, 10, 0);
    public OnTick(): TickAction {
        const playerCurrency = new PlayerCurrency();
        playerCurrency.wood = 10;
        
        return {CurrencyChange: playerCurrency};
    }

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
