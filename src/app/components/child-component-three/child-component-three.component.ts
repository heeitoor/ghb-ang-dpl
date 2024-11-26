import { Component, OnInit } from '@angular/core';
import { ChildComponentBaseComponent } from '../child-component-base/child-component-base.component';

@Component({
  selector: 'app-child-component-three',
  templateUrl: './child-component-three.component.html',
  styleUrls: ['./child-component-three.component.scss']
})
export class ChildComponentThreeComponent extends ChildComponentBaseComponent implements OnInit {

  constructor() { super();}

  ngOnInit(): void {
    console.log('ChildComponentThreeComponent');
  }

}
