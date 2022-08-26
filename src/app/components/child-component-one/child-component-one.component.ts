import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ChildComponentBaseComponent } from '../child-component-base/child-component-base.component';

@Component({
  selector: 'app-child-component-one',
  templateUrl: './child-component-one.component.html',
  styleUrls: ['./child-component-one.component.scss'],
})
export class ChildComponentOneComponent
  extends ChildComponentBaseComponent
  implements OnInit, OnDestroy
{
  @Input() date: Date;

  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log('ChildComponentOneComponent');

    const k = () => {
      this.date = new Date()
      setTimeout(() => {
        k()
      }, 1000);
    };

k()
  }
  ngOnDestroy(): void {
    console.log('ChildComponentOneComponent ngOnDestroy');
  }
}
