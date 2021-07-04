import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testforms',
  templateUrl: './testforms.component.html',
  styleUrls: ['./testforms.component.css']
})
export class TestformsComponent {


   contactMethods=[
     {id:"1",name:"email"},
     {id:"2",name:"postal"}
   ]
   
   genderselect=[
    {no:"1",gend:"male"},
    {no:"2",gend:"Female"}
  ]
  log(first:any) 
  {
    console.log(first);

    
  }

  submit(f:any)
  {
    console.log(f);
  }

}
