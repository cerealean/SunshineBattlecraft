import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';

export abstract class Structure {
    abstract name: string;
    abstract description: string;
    abstract cost: PlayerCurrency;
    abstract ticksToComplete: number;
    abstract currencyChangeOnTick: PlayerCurrency;
    get isComplete(): boolean {
        return this.ticksTowardCompletion >= this.ticksToComplete;
    }

    constructor(public createdOn: Date, public ticksTowardCompletion = 0) {}

    OnTick(): TickAction {
        if (this.isComplete) {
            return {CurrencyChange: this.currencyChangeOnTick};
        } else {
            this.ticksTowardCompletion++;
        }

        return new TickAction();
    }

    public canBuy(playerCurrency: PlayerCurrency) {
        if (!this.cost) {
            throw Error('cost must be defined for structure!');
        }

        return playerCurrency.food >= this.cost.food
                && playerCurrency.gold >= this.cost.gold
                && playerCurrency.metal >= this.cost.metal
                && playerCurrency.wood >= this.cost.wood;
    }

    public clone() {
        return new (<any>this.constructor)(new Date());
    }
}
