import { Character } from './character';

export class Developer extends Character {
    public name = 'Developer';
    public health = 10;
    public defence = 1;
    public speed = 2;

    /**
     *
     */
    constructor(name: string) {
        super();
        this.name = name;
    }
}