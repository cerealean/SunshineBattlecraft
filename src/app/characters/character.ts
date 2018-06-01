import { Weapon } from '../weapons/weapon';
import { Guid } from '../guid';
import { Armor } from '../armor/armor';

export abstract class Character {
    public name: string;
    public health: number;
    public defence: number;
    public speed: number;
    public agility: number;
    public strength: number;
    public weapon: Weapon = null;
    public guid: Guid = Guid.newGuid();
    public numberOfKills = 0;
    public armor: Armor = null;

    constructor(name: string, weapon: Weapon = null) {
        this.name = name;
        this.weapon = weapon;
    }

    public CalculateAttack(): number {
        if (this.weapon === null) {
            return this.strength;
        }

        return this.weapon.damage + this.strength;
    }

    public CalculateDefence(): number {
        if (this.armor == null) {
            return this.defence;
        }

        return this.armor.defense + this.defence;
    }
}
