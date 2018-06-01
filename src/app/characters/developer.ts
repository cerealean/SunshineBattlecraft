import { Character } from './character';
import { Weapon } from '../weapons/weapon';

export class Developer extends Character {
    public strength = 3;
    public health = 10;
    public defence = 1;
    public speed = 2;
    public agility = 1;

    constructor(name: string, weapon: Weapon = null) {
        super(name, weapon);
    }
}
