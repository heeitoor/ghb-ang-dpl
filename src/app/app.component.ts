import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'new-proj';
  ts_hash_version = '';
  ts_commit = '';
  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.ts_hash_version = (document.defaultView as any)[
      'ts_hash_version'
    ] as any;
    this.ts_commit = (document.defaultView as any)['ts_commit'] as any;
  }
}
