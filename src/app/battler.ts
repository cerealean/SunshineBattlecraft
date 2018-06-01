import { Character } from './characters/character';
import { DiceRollerService } from './dice-roller.service';
import { Army } from './characters/army';


export class Battler {
    private battleLog: string[];

    constructor(private diceRoller: DiceRollerService) {}

    public DoBattle(first: Army, second: Army) {
        this.battleLog.push('Commencing battle!');
        while (first.GetNumberOfAliveSoldiers() && second.GetNumberOfAliveSoldiers()) {
            const firstAliveSoldiers = first.GetNumberOfAliveSoldiers();
            const secondAliveSoldiers = second.GetNumberOfAliveSoldiers();
            const firstBattler = first[this.diceRoller.GetRandomNumber(0, firstAliveSoldiers - 1)];
            const secondBattler = second[this.diceRoller.GetRandomNumber(0, secondAliveSoldiers - 1)];

            while (firstBattler.health > 0 && secondBattler.health > 0) {
                if (firstBattler.speed > secondBattler.speed) {
                    this.AttackCharacter(firstBattler, secondBattler);
                } else {
                    this.AttackCharacter(secondBattler, firstBattler);
                }
            }
        }

        const winner = first.GetNumberOfAliveSoldiers() > 0 ? first : second;

        this.battleLog.push(`The winner is ${winner.allegiance}! They have ${winner.GetNumberOfAliveSoldiers()} left in this army.`);
    }

    private AttackCharacter(attacker: Character, defender: Character) {
        let agilityDifferencePercentage = (Math.abs(attacker.agility - defender.agility) * 100);
        if (agilityDifferencePercentage === 0) {
            agilityDifferencePercentage = 10;
        }
        const hitChance = 100 - agilityDifferencePercentage;
        const hitChanceValue = this.diceRoller.GetRandomNumber(0, 100);
        const doesHit = hitChanceValue < hitChance;
        if (doesHit) {
            const damage = attacker.CalculateAttack() - defender.defence;
            defender.health -= damage > 0 ? damage : 1;
            const message = `${attacker.name} attacks ${defender.name} for ${damage} damage, leaving them with ${defender.health} health!`;
            this.battleLog.push(message);

            if (defender.health <= 0) {
                this.battleLog.push(`${attacker.name} has successfully defeated ${defender.name}!`);
            }
        } else {
            this.battleLog.push(`${defender.name} successfully dodges ${attacker.name}'s attack!`);
        }
    }
}
