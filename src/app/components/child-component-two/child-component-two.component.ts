import { Component, OnInit } from '@angular/core';
import { ChildComponentBaseComponent } from '../child-component-base/child-component-base.component';

@Component({
  selector: 'app-child-component-two',
  templateUrl: './child-component-two.component.html',
  styleUrls: ['./child-component-two.component.scss']
})
export class ChildComponentTwoComponent extends ChildComponentBaseComponent implements OnInit {

  constructor() { super();}

  ngOnInit(): void {
    console.log('ChildComponentTwoComponent');
    
  }

}
