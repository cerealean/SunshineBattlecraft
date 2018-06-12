import { Structure } from './structure';
import { TickAction } from '../models/tick-action';

export class Farm implements Structure {
    public OnTick(): TickAction {
        return new TickAction();
    }
}
