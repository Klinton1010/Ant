import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello!{{dataservice.count}}</h1><button (click)="increment()">Increase1</button>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [DataService]
  
})
export class HelloComponent  {
    constructor(public dataservice:DataService)
    {
      
    }
  @Input() name: string="";

  increment()
  {
      this.dataservice.count++;
  }



  
}  
