// Angular 2 objects
import {Component, OnInit} from "@angular/core";

// Model
import {Detox} from '../../models/detox.model';
// Services
import {DetoxService} from '../../services/detox.service';
@Component({
  selector:'detox-component',
  templateUrl:'./components/detox/detox.component.html',
  styleUrls:["./components/detox/detox.css"],
  providers:[]
})
export class DetoxComponent implements OnInit {
    public drug_name: string
    public why: string;
    public last_time: any;
    public detox: Detox;
    public date:any = ['Week-Day', 'Month', 'Day', 'Year','Time','GMT',"Time Zone"]
    public date_text:string = "add date"
    public visible = "collapse"
    constructor(){

    }

    ngOnInit(){
      this.detox = new Detox();
    }

    post_detox(){

    }

    date_numbers(){
      var last_time:any = this.last_time.toString().split(' ');
      console.log('this.last_time: ', last_time);
      last_time.forEach((date, index)=>{
        console.log(this.date[index],": ",date);
      });
    }

    onClick(){
      if(this.visible == "collapse"){
        this.date_text = "hide datepicker"
        this.visible = "visible"
      }

      else {
        this.date_text = "show datepicker"
        this.visible = "collapse"
      }
    }

}
