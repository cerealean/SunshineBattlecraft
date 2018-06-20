import { Component, OnInit } from '@angular/core';
import { Structure } from '../../structures/structure';
import { PlayerControllerService } from '../../services/player-controller.service';

@Component({
  // selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss']
})
export class StructuresComponent implements OnInit {
  constructor(private playerControllerService: PlayerControllerService) { }

  ngOnInit() {}

  purchaseStructure(structure: Structure) {
    if (structure.canBuy(this.playerControllerService.playerCurrency)) {
      this.playerControllerService.playerCurrency.subtractPlayerCurrency(structure.cost);
      var objectToCreate = structure.clone();
      this.playerControllerService.playerStructures = this.playerControllerService.playerStructures.concat([objectToCreate]);
    }
  }

  destroyStructure(structure: Structure) {
    var isConfirmed = confirm(`Are you sure you want to destroy ${structure.name}?`);
    if (isConfirmed) {
      this.playerControllerService.playerStructures = this.playerControllerService.playerStructures.filter(x => x != structure);
    }
  }

  toggleVisibility($event: MouseEvent) {
    const target = <HTMLElement>$event.target;
    const contentElement = target.parentElement.parentElement.getElementsByClassName('card-content')[0];
    if (contentElement.classList.contains('hidden')) {
      contentElement.classList.remove('hidden');
    } else {
      contentElement.classList.add('hidden');
    }
  }
}
