import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
  useExisting: true
})
export class StarshipService {
  starships: Array<any> = [];
  constructor() { }

  fillStarships(){
    this.ajax();
  }

  async ajax(args?: any){
    await $.ajax({
      type: "GET",
      url: (args && args.url ? args.url : "https://swapi.co/api/starships/"),
      data: {},
      success: (response: any)=>{
        let len = response.results.length;
        for(let i = 0; i < len; i++) {
          this.starships.push(response.results[i]);
        }
        if (response.next) {
          this.ajax({ url: response.next });
        }
      },
      dataType: "JSON"
    });
  }
}
