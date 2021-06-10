export const environment = {
  production: true,
  apiEndpoint: 'http://localhost:3000',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiZ29sZGVubWFjZWRldiIsImEiOiJjazBnYnFxb3AwNWdqM2JuNWRwazZxMWY0In0._I3zpcM9QTHNqcXWjWpD6Q',
    mapStyle: 'mapbox://styles/goldenmacedev/ck49vpeap08b61cnubglcag7l'
  },
  firebase: {
    apiKey: 'AIzaSyBnwAys1kCvXdyI_rPO1fcr0gyozVAU6vI',
    authDomain: 'vito-dashboard-angular.firebaseapp.com',
    databaseURL: 'https://vito-dashboard-angular.firebaseio.com',
    projectId: 'vito-dashboard-angular',
    storageBucket: 'vito-dashboard-angular.appspot.com',
    messagingSenderId: '611289891383'
  },
  firebaseStorage: {
    apiKey: 'AIzaSyDskBaULTSFGPRy3AvOpMxVlO6e6u2CFdE',
    authDomain: 'vito-dashboard-vue.firebaseapp.com',
    databaseURL: 'https://vito-dashboard-vue.firebaseio.com',
    projectId: 'vito-dashboard-vue',
    storageBucket: 'vito-dashboard-vue.appspot.com',
    messagingSenderId: '174815027215',
    appId: '1:174815027215:web:1ee7e52a527158bb35037a'
  },
  auth0: {
    domain: 'dev-6u-3fb22.auth0.com',
    clientID: '6ILO4QOBu1uRLBtS9wOkoh6f5ynrtVUo',
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:8080/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: 'https://dev-6u-3fb22.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile'
  }
};
