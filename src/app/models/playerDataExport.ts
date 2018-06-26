import { PlayerSettings } from "./player-settings";
import { Structure } from "../structures/structure";
import { PlayerCurrency } from "./player-currency";

export class PlayerDataExport {
    public playerCurrency: PlayerCurrency;
    public playerStructures: Structure[];
    public structuresAvailableForPurchase: Structure[];
    public playerSettings: PlayerSettings;
}
