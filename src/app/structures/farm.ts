import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';

export class Farm extends Structure {
    public name = 'Farm';
    public description = 'Generates food for your community';
    public cost = new PlayerCurrency(175);
    public currencyChangeOnTick = new PlayerCurrency(0, 0, 0, 10);
    public ticksToComplete = 10;

    public import(structureData: Structure): Structure {
        const newStructure = new (<any>this.constructor)(structureData.createdOn, structureData.ticksTowardCompletion);
        newStructure.currencyChangeOnTick = PlayerCurrency.import(structureData.currencyChangeOnTick);
        newStructure.cost = PlayerCurrency.import(structureData.cost);
        newStructure.description = structureData.description;
        newStructure.name = structureData.name;
        newStructure.ticksToComplete = structureData.ticksToComplete;
        if (!newStructure.OnTick) {
            newStructure.OnTick = Structure.prototype.OnTick;
        }
        if (!newStructure.canBuy) {
            newStructure.canBuy = Structure.prototype.canBuy;
        }
        if (!newStructure.clone) {
            newStructure.clone = Structure.prototype.clone;
        }
        console.log(newStructure);

        return newStructure;
    }

}
