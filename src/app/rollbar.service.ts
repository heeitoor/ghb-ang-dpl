import { DOCUMENT } from '@angular/common';
import {
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
} from '@angular/core';
import { inject } from '@angular/core/testing';
import * as Rollbar from 'rollbar';
import { environment } from 'src/environments/environment';

// const rollbarConfig: Rollbar.Configuration = {
//   accessToken: '0f65bc235dff4e02af85a6501106843a',
//   captureUncaught: true,
//   captureUnhandledRejections: true,
//   payload: {
//     environment: 'prod',
//     client: {
//       javascript: {
//         source_map_enabled: true,
//         guess_uncaught_frames: true,
//         code_version: '{CODE VERSION}',
//       },
//     },
//   },
// };

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err: any): void {
    debugger
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory(injector: Injector) {
  const document = injector.get(DOCUMENT);
  debugger;
  return new Rollbar({
    ...environment.rollbar,
    payload: {
      ...environment.rollbar.payload,
      client: {
        ...environment.rollbar.payload.client,
        javascript: {
          ...environment.rollbar.payload.client.javascript,
          code_version: (document.defaultView as any)['ts_commit'] ?? 'dev',
        },
      },
    },
  });
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');
