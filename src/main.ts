import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api-graphql';
import RestAPI from '@aws-amplify/api-rest';
import PubSub from '@aws-amplify/pubsub';
import amplify from './aws-exports';
Auth.configure(amplify);
API.configure(amplify);
RestAPI.configure(amplify);
PubSub.configure(amplify);
RestAPI.configure({
  API: {
    endpoints: [
      {
        name: "api7faf28dc",
        endpoint: "https://cqgh3mhxlb.execute-api.us-east-1.amazonaws.com/default",
        custom_header: async () => {
          return { Authorization : 'token' }
          // Alternatively, with Cognito User Pools use this:
          //return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
          //return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        }
      }
    ]
  }
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
