# Vito Dashboard Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Working Steps

#### Create new Layout page
1. Create layout module `ng g m layouts/layout2 --routing=true`
2. Create default index component `ng g c layouts/layout2/index --export=true -s --skipTests=true --viewEncapsulation=None`
3. Add Route in `layout2-routing.module.ts` 
    ```
    const routes: Routes = [
      {
        path: '',
        component: IndexComponent,
        children: [
        ]
      }
    ];
    ```
4. After append routes in `app-routing.module.ts`
    ```
    const routes: Routes = [
      { path: 'layout2', loadChildren: './layout2/layout2.module#Layout2Module' }
    ];
    ```

#### Create new Page
2. Create page component `ng g c views/``page-name --export=true -s --skipTests=true`
3. Add Route in `views-routing.module.ts` 
    ```
    const routes: Routes = [
      {
        path: 'page-name',
        component: PageNameComponent
      }
    ];
    ```



#### Create new Component
Create component 
  
   ` ng g c components/vito/component-name --export=true -s --skipTests=true`

Export Component

    @NgModule({
      declarations: [LoaderComponent, ScrollTopComponent],
      exports: [
        LoaderComponent,
        ScrollTopComponent,
        /** --- Add Your Component -- **/
      ],
    
#### Add new CSS & JS
 Append CSS in **angular.json** 

        "architect": {
                 "build": {
                   "builder": "@angular-devkit/build-angular:browser",
                   "options": {
                     .....
                     "styles": [
                       "src/styles.css",
                       /* -- ADD CSS -- */
                     ],


 Append JS in **angular.json** 

        "architect": {
                 "build": {
                   "builder": "@angular-devkit/build-angular:browser",
                   "options": {
                     .....
                     "scripts": [
                        "node_modules/jquery/dist/jquery.min.js",
                        /* -- ADD JS -- */
                     ],

#### Create new Pipe
Create component 
  
   ` ng g p pipes/pipe-name --skipTests=true`


## Generate Redux state

####Action
    ng generate action store/actions/<action-name>
    
####Reducer
    ng generate reducer store/reducers/<reducer-name>
####Selector
     ng generate selector store/selectes/<selectors-name>
    
    
## Build App
    ng build --aot=true --extractCss=true --prod=true --serviceWorker=true
####After
    firebase deploy
