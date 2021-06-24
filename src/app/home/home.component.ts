import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {GraphQLAPIService} from '../services/GraphQLAPIService';
import {RESTAPIService} from '../services/RESTAPIService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection : ChangeDetectionStrategy.Default

})
export class HomeComponent implements OnInit {
  allTodos:any = [];
  apiHello: any;
  constructor(private graphQLAPI: GraphQLAPIService,
              private ref: ChangeDetectorRef,
              private ngZone: NgZone,
              private restAPI : RESTAPIService) { }

    ngOnInit() {
    this.apiHello = "test";
    this.listClients();
    this.graphQLAPI.OnCreateClientListener.subscribe({
      next: (todo:any) => {
        let newCustomer = todo.value.data.onCreateClient;
         this.allTodos.push(newCustomer);
      }
    });
  }
  async createCustomer(todoName){
    if(todoName.value.length){
      const newTodo = {
        name: todoName.value,
       description: 'sample description'
      };
      const customer = {
        first_name: todoName.value,
        last_name: todoName.value,
        };
      await this.graphQLAPI.CreateClientTest(customer);
      todoName.value = null;
    }
  }
   async callRestAPI(){
    const res = await this.restAPI.restGet('api7faf28dc', '/customers');
     this.apiHello = res;
   }
   async listClients(){
     const data = await this.graphQLAPI.ListClients();
     this.allTodos = data.items;
   }

}
