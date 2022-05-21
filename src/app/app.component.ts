import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ChildComponentBaseComponent } from './components/child-component-base/child-component-base.component';
import { ChildComponentOneComponent } from './components/child-component-one/child-component-one.component';
import { ChildComponentThreeComponent } from './components/child-component-three/child-component-three.component';
import { ChildComponentTwoComponent } from './components/child-component-two/child-component-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('childLoader', { static: true, read: ViewContainerRef })
  dynamicChild: ViewContainerRef;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   let componentFactory: ComponentFactory<ChildComponentBaseComponent>;
    //   componentFactory = this.componentFactoryResolver.resolveComponentFactory(
    //     ChildComponentTwoComponent
    //   );
    //   const k = this.dynamicChild.createComponent(componentFactory);
    //   this.items.push(k);
    // }, 1000);
  }

  items: ComponentRef<ChildComponentBaseComponent>[] = [];

  addChild(i: number) {
    let componentFactory: ComponentFactory<ChildComponentBaseComponent>;
    switch (i) {
      case 1:
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            ChildComponentOneComponent
          );
        const component = this.dynamicChild.createComponent(componentFactory);

        (component.instance as ChildComponentOneComponent).date = new Date();
        this.items.push(component);
        break;
      case 2:
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            ChildComponentTwoComponent
          );
        const x = this.dynamicChild.createComponent(componentFactory);
        break;
      case 3:
        componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            ChildComponentThreeComponent
          );
        this.dynamicChild.createComponent(componentFactory);
        break;
    }
    console.log(this.items);
    setTimeout(() => {
      //@ts-ignore
      this.items[0].instance.date = null
    }, 1000);
  }
}
