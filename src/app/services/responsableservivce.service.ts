import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ResponsableservivceService {
  apiURL: string = 'http://127.0.0.1:8000/api/auth/responsables';

  constructor(private http:HttpClient) { }
  create(data:any){
    return this.http.post(this.apiURL,data);
  }
  getall(){
    return this.http.get(this.apiURL);
  }
  getone(id:any){
    return this.http.get(this.apiURL+'/'+id);
  }
  update(data:any){
    return this.http.put(this.apiURL,data);
  }
  delete(id:number){
    return this.http.delete(this.apiURL+'/'+id);
  }


}
