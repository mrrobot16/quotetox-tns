// Angular 2 objects
import {Component, OnInit} from "@angular/core";
import timePickerModule = require("ui/time-picker");
// Model
import {Detox} from '../models/detox.model';

@Component({
  selector:'detox-component',
  templateUrl:'./components/detox.component.html',
  styleUrls:["./components/detox.css"]
})
export class DetoxComponent implements OnInit {
    public welcome_msg: string = "Welcome to Quotox, you are not alone my friend!";
    public quote_of_day: string = "A Lion doesn't concern himself with the opinion of sheep."
    public detox: Detox;
    constructor(){

    }

    ngOnInit(){
      this.detox = new Detox();
      var timePicker:any = new timePickerModule.TimePicker();
      timePicker.hour = 9;
      console.log("timePickerModule: ", timePicker.hour);
    }
}
