// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_KEY: '694d5801faec4ee8bc501ba3acb9b4a7',
  API_KEY_HEADER_NAME: 'X-Api-Key',
  NEWS_BASE_URL: 'https://newsapi.org/v2',
  TOP_HEADLINES_URL: 'https://newsapi.org/v2/top-headlines?country=',
  Q_PAGE_SIZE: '&pageSize=',
  Q_CATEGORY: '&category=',
  Q_QUERY: '&q=',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
