import { Character } from './character';

export class Army {
    constructor(public allegiance: string, public soldiers: Character[]) { }

    public GetNumberOfAliveSoldiers(): number{
        return this.soldiers.filter(x => x.health > 0).length;
    }
}
