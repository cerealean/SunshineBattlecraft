import { Weapon } from '../weapons/weapon';
import { Guid } from '../guid';

export abstract class Character {
    public abstract name: string;
    public abstract health: number;
    public abstract defence: number;
    public abstract speed: number;
    public abstract agility: number;
    public abstract strength: number;
    public weapon: Weapon = null;
    public guid: Guid = Guid.newGuid();

    public CalculateAttack(): number {
        if (this.weapon === null) {
            return this.strength;
        }

        return this.weapon.damage + this.strength;
    }
}
