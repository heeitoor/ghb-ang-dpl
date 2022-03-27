export const environment = {
  production: true,
  rollbar: {
    accessToken: '0f65bc235dff4e02af85a6501106843a',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'prod',
      client: {
        javascript: {
          source_map_enabled: true,
          guess_uncaught_frames: true,
        },
      },
    },
  },
};
