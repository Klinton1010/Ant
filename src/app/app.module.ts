import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { TestComponent } from './test/test.component';
import { ParentModule1Module } from './parent-module1/parent-module1.module';
import { DataService } from './services/data.service';
import { HelloComponent } from './hello.component';
import { TestformsComponent } from './testforms/testforms.component';
import { CrudComponent } from './crud/crud.component';
import { CrudserviceService } from './crudservices/crudservice.service';
import { HttpClientModule } from '@angular/common/http';
import { GgdComponent } from './ggd/ggd.component';


@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent,
    MiddleComponent,
    TestComponent,
    HelloComponent,
    TestformsComponent,
    CrudComponent,
    GgdComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentModule1Module,
    FormsModule,
    HttpClientModule
  
  ],
 providers: [CrudserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
