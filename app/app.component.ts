// Angular 2 objects
import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

@Component({
    selector: "my-app",
    directives:[NS_ROUTER_DIRECTIVES],
    // providers:[NS_ROUTER_PROVIDERS],
    template: `
  <page-router-outlet></page-router-outlet>
    `
})

export class AppComponent {
  // public quote_of_day: string = "A Lion doesn't concern himself with the opinion of  sheep."
  constructor(){

  }
}
