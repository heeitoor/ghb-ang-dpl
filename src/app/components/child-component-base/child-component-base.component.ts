import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component-base',
  templateUrl: './child-component-base.component.html',
  styleUrls: ['./child-component-base.component.scss']
})
export abstract class ChildComponentBaseComponent {

  constructor() {
    console.log('ChildComponentBaseComponent');
  }


}
