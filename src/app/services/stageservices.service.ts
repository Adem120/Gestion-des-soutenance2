import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class StageservicesService {
  public ids:any=[];
  public typedialoge:any=[];
  public typestage:any=[];
  
 
  private type = new BehaviorSubject<any>(this.typedialoge);
  private idd = new BehaviorSubject<any>(this.ids);
  currenttype = this.idd.asObservable();
  currentId = this.type.asObservable();
  currentType = this.type.asObservable();
apiurl:string='http://127.0.0.1:8000/api/auth/'
  constructor(private http:HttpClient) { }
  changeId(id:string){
    this.idd.next(id);
    
    
  }
  changetype(type:boolean){
   
    this.type.next(type);
    
  }

  getstage(stag:any){
    return this.http.get(this.apiurl+'getstages'+'/'+stag);
  }
  getstagebyid(id:any){
    return this.http.get(this.apiurl+'getstagebyid'+'/'+id);
  }
  getdate(){
    return this.http.get(this.apiurl+'session');
  }
  createdate(date:any){
    return this.http.post(this.apiurl+'session',date);
  }
  getdates(){
    return this.http.get(this.apiurl+'dates');
  }
  getdatepossible(date:any){
    return this.http.post(this.apiurl+'sessionpossibe',date);
  }
  addstage(stage:any){
    return this.http.post(this.apiurl+'stages',stage);
  }
  listetudientnoneffectué(){
    return this.http.get(this.apiurl+'getetud');
  }
nombrestage(){
  return this.http.get(this.apiurl+'nbrs1');
}
nombrestage2(){
  return this.http.get(this.apiurl+'nbrs2');}
  consulter(cin:any){
    return this.http.post(this.apiurl+'consulter',cin);
  }
  ajoutreclamation(reclamation:any){
    return this.http.post(this.apiurl+'adrec',reclamation);
  }
  getreclamation(){
    return this.http.get(this.apiurl+'rec');
  }
  deletereclamation(id:any){
    return this.http.delete(this.apiurl+'deleterec/'+id);
  }
  repondrerecl(data:any){
    return this.http.post(this.apiurl+'emailres',data);
  }
  deletestage(id:any){
    return this.http.delete(this.apiurl+'deletestag/'+id);
  }
}
