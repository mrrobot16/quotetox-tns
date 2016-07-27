// Angular 2 objects
import {Component, OnInit} from "@angular/core";
// Models

@Component({
  selector:'home-screen-component',
  template:`

  <StackLayout>
     <Label [text]="quote_of_day" class="quote_of_day" textWrap="true"></Label>
  </StackLayout>
  `,
  styleUrls:["./components/home-screen/home-screen.css"]
})
export class HomeScreenComponent implements OnInit {
    public quote_of_day: string;
    constructor(){
      this.quote_of_day = "A Lion doesn't concern himself with the opinion of a sheep.";
    }

    ngOnInit(){

    }

}
