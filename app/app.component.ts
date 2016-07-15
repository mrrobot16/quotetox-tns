// Angular 2 objects
import {Component} from "@angular/core";
import {RouteConfig} from '@angular/router-deprecated';
// import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router-deprecated/ns-router-deprecated";
// Components
import {DetoxComponent} from './components/detox.component';

@Component({
    selector: "my-app",
    directives:[NS_ROUTER_DIRECTIVES],
    providers:[NS_ROUTER_PROVIDERS],
    template: `
  <page-router-outlet></page-router-outlet>
    `
})
@RouteConfig([
  {path:'detox', name:'Detox', component:DetoxComponent, useAsDefault:true}
])
export class AppComponent {
  public quote_of_day: string = "A Lion doesn't concern himself with the opinion of sheep."
  constructor(){

  }
}
