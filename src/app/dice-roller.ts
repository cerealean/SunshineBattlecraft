export class DiceRoller {
  constructor() { }

  public RollDice(numberOfSides: number, numberOfTimesToRoll: number): number {
    let total = 0;

    for (let i = 0; i < numberOfTimesToRoll; i++) {
      total += this.GetRandomNumber(1, numberOfSides);
    }

    return total;
  }

  public GetRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
