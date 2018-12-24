import { Research } from './research';
import { PlayerCurrency } from '../models/player-currency';
import { TickAction } from '../models/tick-action';
import { TownCenter } from '../structures/town-center';

export class CombatI extends Research {
    name = 'Combat I';
    description = 'Research the basics of combat. Allows the construction of a barracks.';
    cost = new PlayerCurrency(500, 300, 300, 250);
    ticksToComplete = 5;
    structureRequirements = [new TownCenter()];

    OnTick(): TickAction {
        if(!this.isComplete) {
            this.ticksTowardCompletion++;
        }
        return new TickAction();
    }
}