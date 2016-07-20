// Angular 2 objects
import {Component, OnInit} from "@angular/core";
// Model
import {Detox} from '../../models/detox.model';

@Component({
  selector:'detox-component',
  templateUrl:'./components/detox/detox.component.html',
  styleUrls:["./components/detox/detox.css"]
})
export class DetoxComponent implements OnInit {
    public welcome_msg: string = "Welcome to Quotox, you are not alone my friend!";
    public quote_of_day: string = "A Lion doesn't concern himself with the opinion of sheep."
    public why: string;
    public last_time: any;
    public detox: Detox;
    public date:any = ['Week-Day', 'Month', 'Day', 'Year','Time','GMT',"Time Zone"]
    constructor(){

    }

    ngOnInit(){
      this.detox = new Detox();
      // setTimeout(this.testfx(), 5000);
    }

    testfx(){
      var last_time:any = this.last_time.toString().split(' ');
      console.log('this.last_time: ', last_time);
      last_time.forEach((date, index)=>{
        console.log(this.date[index],": ",date);
      });
    }

}
