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

  post_detox(){

  }
}
