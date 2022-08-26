import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ChildLoaderDirective } from './directives/child-loader.directive';
import { ChildComponentOneComponent } from './components/child-component-one/child-component-one.component';
import { ChildComponentTwoComponent } from './components/child-component-two/child-component-two.component';
import { ChildComponentThreeComponent } from './components/child-component-three/child-component-three.component';
import { ChildComponentBaseComponent } from './components/child-component-base/child-component-base.component';

@NgModule({
  declarations: [
    AppComponent,
    //ChildLoaderDirective,
    ChildComponentOneComponent,
    ChildComponentTwoComponent,
    ChildComponentThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
