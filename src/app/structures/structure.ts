import { TickAction } from '../models/tick-action';
import { PlayerCurrency } from '../models/player-currency';
import { Research } from '../research/research';

export abstract class Structure {
    abstract name: string;
    abstract description: string;
    abstract cost: PlayerCurrency;
    abstract ticksToComplete: number;
    abstract currencyChangeOnTick: PlayerCurrency;
    abstract icon: string;
    researchRequirements: Research[];

    constructor(public createdOn: Date = new Date(), public ticksTowardCompletion = 0) { }

    public static import<T extends Structure>(structureData: T): T {
        const newStructure = <T>{};
        newStructure.createdOn = structureData.createdOn;
        newStructure.ticksTowardCompletion = structureData.ticksTowardCompletion;
        newStructure.currencyChangeOnTick = PlayerCurrency.import(structureData.currencyChangeOnTick);
        newStructure.cost = PlayerCurrency.import(structureData.cost);
        newStructure.description = structureData.description;
        newStructure.name = structureData.name;
        newStructure.icon = structureData.icon;
        newStructure.ticksToComplete = structureData.ticksToComplete;
        newStructure.researchRequirements = structureData.researchRequirements;
        if (!newStructure.OnTick) {
            newStructure.OnTick = Structure.prototype.OnTick;
        }
        if (!newStructure.canBuy) {
            newStructure.canBuy = Structure.prototype.canBuy;
        }
        if (!newStructure.isComplete) {
            newStructure.isComplete = Structure.prototype.isComplete;
        }
        if(!newStructure.getPercentComplete) {
            newStructure.getPercentComplete = Structure.prototype.getPercentComplete;
        }

        return newStructure;
    }

    public static importMany(structureData: Structure[]): Structure[] {
        return structureData.map(x => Structure.import(x));
    }


    public OnTick(): TickAction {
        if (this.isComplete()) {
            return { CurrencyChange: this.currencyChangeOnTick };
        } else {
            this.ticksTowardCompletion++;
        }
        return new TickAction();
    }

    public getType() {
        return (<any>this.constructor);
    }

    public canBuy(playerCurrency: PlayerCurrency) {
        if (!this.cost) {
            throw Error('cost must be defined for structure!');
        }

        const hasEnoughResources = playerCurrency.food >= this.cost.food
            && playerCurrency.gold >= this.cost.gold
            && playerCurrency.metal >= this.cost.metal
            && playerCurrency.wood >= this.cost.wood;

        return hasEnoughResources;
    }

    public isComplete(): boolean {
        return this.ticksTowardCompletion >= this.ticksToComplete;
    }

    public getPercentComplete(): number {
        return (this.ticksTowardCompletion / this.ticksToComplete) * 100;
    }
}
