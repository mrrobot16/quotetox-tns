// Angular 2 objects
import {Component, OnInit} from "@angular/core";
import timePickerModule = require("ui/time-picker");
import datePickerModule = require("ui/date-picker");
import {Page} from 'ui/page';
import {topmost} from 'ui/frame';
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
    public why: string;
    public detox: Detox;
    constructor(){

    }

    ngOnInit(){
      this.detox = new Detox();
    }
}
