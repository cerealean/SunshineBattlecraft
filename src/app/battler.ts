import { Character } from './characters/character';
import { DiceRoller } from './dice-roller';
import { Army } from './characters/army';


export class Battler {
    public battleLog: string[] = [];
    private diceRoller: DiceRoller = new DiceRoller();

    public DoBattle(first: Army, second: Army) {
        this.battleLog.push('Commencing battle!');
        while (first.GetNumberOfAliveSoldiers() && second.GetNumberOfAliveSoldiers()) {
            const firstAliveSoldiers = first.GetNumberOfAliveSoldiers();
            const secondAliveSoldiers = second.GetNumberOfAliveSoldiers();
            const firstBattler = first.GetAliveSoldiers()[this.diceRoller.GetRandomNumber(0, firstAliveSoldiers - 1)];
            const secondBattler = second.GetAliveSoldiers()[this.diceRoller.GetRandomNumber(0, secondAliveSoldiers - 1)];

            while (firstBattler.health > 0 && secondBattler.health > 0) {
                if (firstBattler.speed > secondBattler.speed) {
                    this.AttackCharacter(firstBattler, secondBattler);
                    this.AttackCharacter(secondBattler, firstBattler);
                } else if (secondBattler.speed > firstBattler.speed) {
                    this.AttackCharacter(secondBattler, firstBattler);
                    this.AttackCharacter(firstBattler, secondBattler);
                } else {
                    const coinFlip = !!this.diceRoller.GetRandomNumber(0, 1);
                    if (coinFlip) {
                        this.AttackCharacter(firstBattler, secondBattler);
                        this.AttackCharacter(secondBattler, firstBattler);
                    } else {
                        this.AttackCharacter(secondBattler, firstBattler);
                        this.AttackCharacter(firstBattler, secondBattler);
                    }
                }
            }
        }

        const winner = first.GetNumberOfAliveSoldiers() > 0 ? first : second;

        this.battleLog.push(`The winner is ${winner.allegiance}! They have ${winner.GetNumberOfAliveSoldiers()} left in this army.`);
        const mvp = winner.GetAliveSoldiers().reduce((prev, current) => (prev.numberOfKills > current.numberOfKills) ? prev : current);
        this.battleLog.push(`The MVP of ${winner.allegiance}'s army was ${mvp.name} with ${mvp.numberOfKills} kills!`);
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
            const damage = attacker.CalculateAttack() - defender.CalculateDefence();
            defender.health -= damage > 0 ? damage : 1;
            const message = `${attacker.name} attacks ${defender.name} with ${attacker.weapon ? attacker.weapon.name : 'fists'} for ${damage} damage, leaving them with ${defender.health} health!`;
            this.battleLog.push(message);

            if (defender.health <= 0) {
                attacker.numberOfKills++;
                this.battleLog.push(`${attacker.name} has successfully defeated ${defender.name}!`);
            }
        } else {
            this.battleLog.push(`${defender.name} successfully dodges ${attacker.name}'s attack!`);
        }
    }
}
