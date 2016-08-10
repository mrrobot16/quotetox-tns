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
  providers:[DetoxService]
})
export class DetoxComponent implements OnInit {
    public drug_name: string
    public why: string
    public last_time = new Date();
    public detox: Detox
    public detoxes:any
    public date:any = ['Week-Day', 'Month', 'Day', 'Year','Time','GMT',"Time Zone"]
    public date_text:string = "add date"
    public visible = "collapse"
    public month_to_numbers = { jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6, aug:7, sep:8, oct:9, nov:10, dec:11 }

    constructor(private detox_service: DetoxService){

    }

    ngOnInit(){
      this.detox = new Detox()
    }

    last_time_date(){
      var last_time:any = this.detox.last_time.toString().split(' ')
      var last_time_mon:any = last_time[1].toLowerCase()
      last_time_mon = this.month_to_numbers[last_time_mon];
      this.detox.last_time = new Date(last_time[3], last_time_mon, last_time[2])
    }

    toggle_date(){
      this.last_time_date();
      if(this.visible == "collapse"){
        this.date_text = "save date"
        this.visible = "visible";
      }

      else {
        this.date_text = "show datepicker"
        this.visible = "collapse";
      }
    }

    get_detoxes():Promise<any> {
      var detoxes = this.detox_service.get_detoxes();
      return detoxes.then((detoxes) => {
        this.detoxes = detoxes[detoxes.length-1].last_time;
        console.log(this.detoxes);
      });
      }

    post_detox(){
      this.last_time_date();
      this.detox_service.post_detox(this.detox);
    }
  }
