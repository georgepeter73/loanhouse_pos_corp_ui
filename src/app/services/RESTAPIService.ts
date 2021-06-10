import {Injectable} from '@angular/core';
import {Auth} from '@aws-amplify/auth';
import RestAPI from '@aws-amplify/api-rest';

@Injectable({
  providedIn: "root"
})
export class RESTAPIService {
  public async restGet(apiName:string,path:string): Promise<any>{
    const myInit = { // OPTIONAL
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,

      }, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {  // OPTIONAL
        name: 'param',
      },
    };
    const res = await RestAPI.get(apiName, path, myInit);
    return res.data;
  }
}
