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

  destroyStructure(structure: Structure){
    this.structures = this.structures.filter(x => x != structure);
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
