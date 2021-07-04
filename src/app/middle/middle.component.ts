import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  bookName:String="Harry Potter"
  Nop:number=25;
  author:String="Harry";
  status:String="Available";
  disabled:boolean=true
  constructor() { }

  inifunc()
  {
  if(this.status==="Available")
  {
    this.status="Not Available"
  }
  else this.status="Available"
  }

  ngOnInit(): void {
    this.inifunc()
  }

}
