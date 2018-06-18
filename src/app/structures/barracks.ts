import { Structure } from './structure';
import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export class Barracks extends Structure {
    public name = 'Barracks';
    public description = 'A barracks to create fighting units!';
    public cost = new PlayerCurrency(500, 150, 100, 100);
    public OnTick(): TickAction {
        return new TickAction();
    }

    constructor(createdOn: Date) {
        super(createdOn);
    }
}
