export class PlayerCurrency {
    public gold: number = 0;
    public wood: number = 0;
    public metal: number = 0;
    public food: number = 0;

    public addPlayerCurrency(playerCurrency: PlayerCurrency){
        this.gold += playerCurrency.gold;
        this.wood += playerCurrency.wood;
        this.metal += playerCurrency.metal;
        this.food += playerCurrency.food;
    }
}
