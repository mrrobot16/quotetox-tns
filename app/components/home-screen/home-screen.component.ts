// Angular 2 objects
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

// Components
import {DetoxComponent} from '../detox/detox.component';

// Services
import {DetoxService} from '../../services/detox.service';

@Component({
  selector:'home-screen-component',
  template:`
<ActionBar title="Quotox">
<!--    <ActionItem text="Quotes" (tap)="quotes()" ios.position="left"></ActionItem> -->
    <ActionItem text="Detox" (tap)="detox_screen()" ios.position="right"></ActionItem>
</ActionBar>

  <StackLayout>
     <Label text="Quote of the day" class="quote_of_day" textWrap="true"></Label>
     <Label [text]="quote_of_day" class="quote" textWrap="true"></Label>
     <Label text="{{days_clean}} days free of alcohol" class="days_clean" textWrap="true"></Label>
     <Button class="detox-btn" text="Get Detoxes" (tap)="get_detoxes()"></Button>
  </StackLayout>

  `,
  styleUrls:["./components/home-screen/home-screen.css"],
  directives:[DetoxComponent],
  providers:[DetoxService]
})
export class HomeScreenComponent implements OnInit {
    public quote_of_day: string;
    public last_time: any = new Date(2016,0,17)
    public today:any = new Date();
    public days_clean:number;
    public detoxes:any;
    constructor(private router: Router, private detox_service:DetoxService){

    }

    ngOnInit(){
      this.quote_of_day = "A Lion doesn't concern himself with the opinion of a sheep.";
      this.days_clean = Math.floor(((this.today - this.last_time)/(864*Math.pow(10,5))));
    }

    detox_screen(){
      this.router.navigate(["/detox"]);
    }

}
