export class PlayerCurrency {
    constructor(
        public gold = 0,
        public wood = 0,
        public metal = 0,
        public food = 0
    ) {}

    public static import(currency: PlayerCurrency) {
        return new PlayerCurrency(currency.gold, currency.wood, currency.metal, currency.food);
    }

    public static importMany(currency: PlayerCurrency[]) {
        return currency.map(x => this.import(x));
    }

    public addPlayerCurrency(playerCurrency: PlayerCurrency) {
        this.gold += playerCurrency.gold;
        this.wood += playerCurrency.wood;
        this.metal += playerCurrency.metal;
        this.food += playerCurrency.food;
    }

    public subtractPlayerCurrency(playerCurrency: PlayerCurrency) {
        this.gold -= playerCurrency.gold;
        this.wood -= playerCurrency.wood;
        this.metal -= playerCurrency.metal;
        this.food -= playerCurrency.food;
    }
}
