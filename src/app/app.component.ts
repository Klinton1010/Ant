import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import{DataService} from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name = 'Angular ';
//calling the SERVICES
  constructor(public dataservice:DataService)
  {
    
  }

  semma(user:any,userdiv:any)
  {
    alert("clicked")
    console.log("hello Hari"+user+"");
  }
  
  increase()
  {
    this.dataservice.count++
  }
}
