import { Component, OnInit } from '@angular/core';
import { PlayerControllerService } from '../../services/player-controller.service';

@Component({
  // selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor(private playerControllerService: PlayerControllerService) { }

  ngOnInit() {
  }

}
