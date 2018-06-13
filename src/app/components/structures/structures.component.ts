import { Component, OnInit } from '@angular/core';
import { Structure } from '../../structures/structure';
import { PlayerControllerService } from '../../services/player-controller.service';

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

  toggleVisibility($event: MouseEvent) {
    console.log($event.target);
  }

}
