// Angular 2 objects
import {Component} from "@angular/core";
// import {ROUTER_DIRECTIVES} from '@angular/router';
// import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";


// Components


@Component({
    selector: "my-app",
    template: `
    <!--  <StackLayout>
        <Label [text]="welcome_msg" class="welcome_msg" textWrap="true"></Label>

        <Label [text]="quote_of_day" class="quote" textWrap="true"></Label>
         <Button text="TAP"></Button>
    </StackLayout> -->
    <page-router-outlet></page-router-outlet>
    `
    // directives:[NS_ROUTER_DIRECTIVES],
    // providers:[NS_ROUTER_PROVIDERS]
})

export class AppComponent {
    public welcome_msg: string = "Welcome to Quotox, you are not alone my friend!";
    public quote_of_day: string = "A lion is not concerned by the opinion of the sheep."

}
