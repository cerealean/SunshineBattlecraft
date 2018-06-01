import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {
  constructor() { }

  public RollDice(numberOfSides: number, numberOfTimesToRoll: number): number {
    let total = 0;

    for (let i = 0; i < numberOfTimesToRoll; i++) {
      total += this.GetRandomNumber(1, numberOfSides);
    }

    return total;
  }

  public GetRandomNumber(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  }
}
