import { Component, OnInit } from '@angular/core';
import { Structure } from '../../structures/structure';
import { PlayerControllerService } from '../../services/player-controller.service';

@Component({
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss']
})
export class StructuresComponent implements OnInit {
  public selectedStructure: Structure;
  constructor(private playerControllerService: PlayerControllerService) { }

  ngOnInit() {}

  purchaseStructure(structure: Structure) {
    if (true || structure.canBuy(this.playerControllerService.playerCurrency)) {
      this.playerControllerService.playerCurrency.subtractPlayerCurrency(structure.cost);
      const objectToCreate = Structure.import(structure);
      objectToCreate.ticksTowardCompletion = 0;
      objectToCreate.createdOn = new Date();
      this.playerControllerService.playerStructures = this.playerControllerService.playerStructures.concat([objectToCreate]);
    }
  }

  destroyStructure(structure: Structure) {
    const isConfirmed = confirm(`Are you sure you want to destroy ${structure.name}?`);
    if (isConfirmed) {
      this.playerControllerService.playerStructures = this.playerControllerService.playerStructures.filter(x => x !== structure);
    }
  }

  selectStructure(structure: Structure): void {
    this.selectedStructure = structure;
  }

  deselectStructure(): void {
    this.selectedStructure = null;
  }
}
