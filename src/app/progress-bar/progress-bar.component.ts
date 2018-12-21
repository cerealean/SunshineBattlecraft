import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() max: number;
  @Input() value: number;
  @Input() display: string;
  @Input() classes: string;

  constructor() { }

  ngOnInit() {
    if (this.max === null || this.max === undefined || isNaN(this.max)) {
      throw new Error('[max] must be provided on the Progress Bar component and must be a number!');
    } else if (this.value === null || this.value === undefined || isNaN(this.value)) {
      throw new Error('[value] must be provided on the Progress Bar component and must be a number!');
    }
  }

}
