// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:5000',
  publicKey: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik51ZXZvIFByb2dyZXNvIERlbGkiLCJpYXQiOjE1MTYyMzkwMjJ9', //Nuevo Progreso Deli
  //eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik51ZXZvIFByb2dyZXNvIGNhZmUiLCJpYXQiOjE1MTYyMzkwMjJ9 -> Nuevo Progreso Café
  pathGit: '/',
  files: {
    pdf: 2,
    image: 10
  },
  cloudinary: {
    cloud_name: 'dfzcljabo',
    upload_preset: 'qr-menu-app',
    api_key: '981358926238223',
    api_secret: '3fgffH_OtruyNy-p4tz0f35P8DA'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
