export class DiceRoller {
  constructor() { }

  /**
   * @description Roll a specified die a specified number of times
   * @param numberOfSides The number of sides on the dice you want to roll
   * @param numberOfTimesToRoll How many times to roll the dice
   */
  public RollDice(numberOfSides: number, numberOfTimesToRoll: number): number {
    let total = 0;

    for (let i = 0; i < numberOfTimesToRoll; i++) {
      total += this.GetRandomNumber(1, numberOfSides);
    }

    return total;
  }

  /**
   * @description Returns either 0 or 1, resembling tails or heads from a coin flip
   */
  public FlipCoin(): number {
    return this.GetRandomNumber(0, 1);
  }

  /**
   * @description Returns a random number between min and max, inclusive
   * @param min The minimum value, inclusive
   * @param max The maximum value, inclusive
   */
  public GetRandomNumber(min: number, max: number): number {
    if (min > max) {
      throw new Error('min value cannot be greater than max value!');
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
