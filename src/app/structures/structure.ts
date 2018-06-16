import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export abstract class Structure {
    abstract name: string;
    abstract description: string;
    abstract cost: PlayerCurrency;

    constructor(public createdOn: Date){}

    abstract OnTick(): TickAction;

    public canBuy(playerCurrency: PlayerCurrency){
        if(!this.cost){
            throw Error("cost must be defined for structure!");
        }

        return playerCurrency.food >= this.cost.food
                && playerCurrency.gold >= this.cost.gold
                && playerCurrency.metal >= this.cost.metal
                && playerCurrency.wood >= this.cost.wood;
    }

    public clone(){
        return new (<any>this.constructor)(new Date());
    }
}
