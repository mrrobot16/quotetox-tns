import {Injectable} from '@angular/core';

@Injectable()

export class DetoxService {
  constructor(){

  }

  get_detoxes(){
    return fetch("http://quotetox.herokuapp.com/detoxes").then( response => {
      return response.json();
    }).then(r => {
      return r;
    }, e => {
      console.log("e");
      console.log(e);
      return e;
    })
  }

  post_detox(detox){
    var object = {
      detox: detox
    }
    return fetch("http://quotetox.herokuapp.com/detoxes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object)
      }).then(r => { return r.json(); }).then(function (r) {
            console.log("r");
            console.log(r);
      }, function (e) {
        console.log("Error occurred " + e);
    });
  }
}
