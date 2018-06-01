import { Character } from './character';

export class Developer extends Character {
    public strength = 3;
    public name = 'Developer';
    public health = 10;
    public defence = 1;
    public speed = 2;
    public agility = 1;

    constructor(name: string) {
        super();
        this.name = name;
    }
}
