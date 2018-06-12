import { Component, OnInit } from '@angular/core';
import { Structure } from '../../structures/structure';

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.scss']
})
export class StructuresComponent implements OnInit {
  private structures: Structure[];

  constructor() { }

  ngOnInit() {
  }

}
