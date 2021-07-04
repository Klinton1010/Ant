import { Injectable } from '@angular/core';
import{HttpClient,HttpHandler,HttpHeaders} from '@angular/common/http';
import { studentModel } from '../crud/crud.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  private readonly URL:string="http://localhost:8090/studentinfoapi/wci/student/create";
                
  constructor(public http:HttpClient) { }

  create(data:studentModel):Observable<studentModel>
  {
     //var body=JSON.stringify(data);
     //console.log(body)
     //var header=new Headers({'content-Type':'application/json'});
     //var req=new RequestOptions({method:RequestMethod.Post,Headers:header})
     //return this.http.post<studentModel>(this.URL,body)
     //let httpheaders=new HttpHeaders();
     //httpheaders.append('Content-Type','application/Json')
     //let opt={header:httpheaders};
     //return this.http.post<any>(this.URL,body,{opt});     

     
       const headers = { 'content-Type':'application/json' };
        const body = { title: 'Angular POST Request Example' };
        return this.http.post<studentModel>(this.URL, data, { headers })
  }
}


function body<T>(URL: string, body: any, arg2: { headre: HttpHeaders; }): Observable<studentModel> {
  throw new Error('Function not implemented.');
}

