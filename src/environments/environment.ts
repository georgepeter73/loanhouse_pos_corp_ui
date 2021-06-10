// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:3000',
  mapbox: {
    accessToken: '',
    mapStyle: ''
  },
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  },
  firebaseStorage: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  },
  auth0: {
    domain: '',
    clientID: '',
    // make sure this line is contains the port: 8080
    redirectUri: '',
    // we will use the api/v2/ to access the user information as payload
    audience: '',
    responseType: '',
    scope: ''
  },

   aws_amplify: {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:42af267a-8dd6-4593-81cb-3e271644c0d3",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_52d9hDELx",
    "aws_user_pools_web_client_id": "86flmjobolbt3cuot7kufs03r",
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://45gxwox6lbdfnkp3v7burp44sa.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_cloud_logic_custom": [
      {
        "name": "api7faf28dc",
        "endpoint": "https://3aqoh4liw6.execute-api.us-east-1.amazonaws.com/dev",
        "region": "us-east-1"
      }
    ]
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
