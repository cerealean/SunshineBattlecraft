import { TickAction } from '../models/tick-action';

export abstract class Structure {
    public name: string;
    public description: string;

    abstract OnTick(): TickAction;

    constructor(public createdOn: Date){}
}
