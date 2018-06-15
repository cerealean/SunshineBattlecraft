export class PlayerCurrency {
    constructor(
        public gold = 0,
        public wood = 0,
        public metal = 0,
        public food = 0
    ){}

    public addPlayerCurrency(playerCurrency: PlayerCurrency){
        this.gold += playerCurrency.gold;
        this.wood += playerCurrency.wood;
        this.metal += playerCurrency.metal;
        this.food += playerCurrency.food;
    }
}
