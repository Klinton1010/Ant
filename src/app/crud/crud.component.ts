import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudserviceService } from '../crudservices/crudservice.service';

export class studentModel
{
  id:any;
  name?:string;
  age:any;
  course?:string;
  mobileNo?:string;
  city?:string;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})


export class CrudComponent implements OnInit {

  constructor(private curd:CrudserviceService) { }

  student:studentModel=new studentModel();
  
  submit(form:NgForm):void
  {
    console.log(form)
    console.log(form.value)
    this.curd.create(form.value).subscribe(res=>{console.log(res)})
  }

  ngOnInit(): void {
    console.log("hello")
  }

}
