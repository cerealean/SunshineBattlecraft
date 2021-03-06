import { Structure } from './structure';
import { PlayerCurrency } from '../models/player-currency';
import { CombatI } from '../research/combat';

export class Barracks extends Structure {
    public name = 'Barracks';
    public description = 'A barracks to create fighting units!';
    public cost = new PlayerCurrency(500, 150, 100, 100);
    public currencyChangeOnTick = new PlayerCurrency(-10);
    public ticksToComplete = 13;
    public icon = 'fas fa-gopuram';
    researchRequirements = [new CombatI()];
}
