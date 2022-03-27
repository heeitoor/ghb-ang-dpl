import {
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Rollbar from 'rollbar';
import {
  RollbarErrorHandler,
  rollbarFactory,
  RollbarService,
} from './rollbar.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    {
      provide: RollbarService,
      useFactory: rollbarFactory,
      deps: [Injector],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
