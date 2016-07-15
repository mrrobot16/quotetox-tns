// Angular 2 objects
import {Component, OnInit} from "@angular/core";

@Component({
  selector:'detox-component',
  template:`
     <StackLayout>
        <Label [text]="welcome_msg" class="welcome_msg" textWrap="true"></Label>

        <Label [text]="quote_of_day" class="quote" textWrap="true"></Label>
         <Button text="TAP"></Button>
    </StackLayout>
  `,
  styleUrls:["./components/detox.css"]
})
export class DetoxComponent implements OnInit {
    public welcome_msg: string = "Welcome to Quotox, you are not alone my friend!";
    public quote_of_day: string = "A Lion doesn't concern himself with the opinion of sheep."

    constructor(){

    }

    ngOnInit(){

    }
}
