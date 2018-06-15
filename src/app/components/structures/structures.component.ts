import { Component, OnInit } from '@angular/core';
import { Structure } from '../../structures/structure';
import { PlayerControllerService } from '../../services/player-controller.service';
import { OreMine } from '../../structures/ore-mine';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss'],
  providers: [PlayerControllerService]
})
export class StructuresComponent implements OnInit {
  private structures: Structure[] = [];

  constructor(private playerControllerService: PlayerControllerService) { }

  ngOnInit() {
    this.structures = this.playerControllerService.playerStructures;
  }

  purchaseStructure(structure: Structure){
    var objectToCreate = Object.create(structure);
    this.structures = this.structures.concat([objectToCreate]);
    this.saveStructures();
  }

  destroyStructure(structure: Structure){
    var isConfirmed = confirm(`Are you sure you want to destroy ${structure.name}?`);
    if(isConfirmed){
      this.structures = this.structures.filter(x => x != structure);
      this.saveStructures();
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

  private saveStructures(){
    this.playerControllerService.playerStructures = this.structures;
  }

}
