import { Research } from "./research";
import { PlayerCurrency } from "../models/player-currency";
import { TickAction } from "../models/tick-action";

export class Combat extends Research {
    name = "Combat I";   
    description = "Research the basics of combat. Allows the construction of a barracks.";
    cost = new PlayerCurrency(500, 300, 300, 250);
    ticksToComplete = 5;

    OnTick(): TickAction {
        if(!this.isComplete){
            this.ticksTowardCompletion++;
        }
        return new TickAction();
    }
}