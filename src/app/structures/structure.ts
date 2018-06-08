import { TickAction } from '../models/tick-action';

export interface Structure {
    OnTick(): TickAction;
}
