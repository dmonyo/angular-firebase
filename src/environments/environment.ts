// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCvDP3AAvZ7IZsxk5cKFdCSpm6nExzPB08",
    authDomain: "angular-fb-chat.firebaseapp.com",
    databaseURL: "https://angular-fb-chat.firebaseio.com",
    projectId: "angular-fb-chat",
    storageBucket: "angular-fb-chat.appspot.com",
    messagingSenderId: "568583996526"
  }
};
