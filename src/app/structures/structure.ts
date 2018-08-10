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

    constructor(public createdOn: Date = new Date(), public ticksTowardCompletion = 0) {}

    public static import(structureData: Structure) {
        const newStructure = new (<any> new Structure().constructor)(structureData.createdOn, structureData.ticksTowardCompletion);
        newStructure.currencyChangeOnTick = PlayerCurrency.import(structureData.currencyChangeOnTick);
        newStructure.cost = PlayerCurrency.import(structureData.cost);
        newStructure.description = structureData.description;
        newStructure.name = structureData.name;
        newStructure.ticksToComplete = structureData.ticksToComplete;

        return newStructure;
    }

    public static importMany(structuresToImport: Structure[]) {
        return structuresToImport.map(x => this.import(x));
    }

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
