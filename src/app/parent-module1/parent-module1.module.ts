import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { ParentModule2Module } from '../parent-module2/parent-module2.module';



@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    ParentModule2Module
  ],
  exports:[Test1Component,Test2Component,ParentModule2Module],
  
})
export class ParentModule1Module { }
