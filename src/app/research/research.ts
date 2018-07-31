import { PlayerCurrency } from '../models/player-currency';
import { TickAction } from '../models/tick-action';

export abstract class Research {
    abstract name: string;
    abstract description: string;
    abstract cost: PlayerCurrency;
    abstract ticksToComplete: number;
    ticksTowardCompletion = 0;
    get isComplete(): boolean {
        return this.ticksTowardCompletion >= this.ticksToComplete;
    }

    constructor(){}

    abstract OnTick(): TickAction;

    public canBuy(playerCurrency: PlayerCurrency){
        if(!this.cost){
            throw Error('cost must be defined for research!');
        }

        return playerCurrency.food >= this.cost.food
                && playerCurrency.gold >= this.cost.gold
                && playerCurrency.metal >= this.cost.metal
                && playerCurrency.wood >= this.cost.wood;
    }
}