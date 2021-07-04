import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupertestComponent } from './supertest/supertest.component';



@NgModule({
  declarations: [
    SupertestComponent
  ],
  exports:[SupertestComponent],
  imports: [
    CommonModule
  ],
  
})
export class ParentModule2Module { }
