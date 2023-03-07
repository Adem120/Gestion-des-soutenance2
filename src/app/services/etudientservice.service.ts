import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EtudientModule } from '../etudient/etudient.module';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class EtudientserviceService {
  public id:any=[];
  public typedialoge:any=[];
  
 
  private type = new BehaviorSubject<any>(this.typedialoge);
  private idd = new BehaviorSubject<any>(this.id);
  currentId = this.idd.asObservable();
  currentType = this.type.asObservable();
  
  
apiURL: string = 'http://127.0.0.1:8000/api/auth/';
  constructor(private http:HttpClient) { }
  changeId(id:string){
    this.idd.next(id);
    
    
  }
  changetype(type:boolean){
    console.log(type);
   
    this.type.next(type);
    
  }
  listeEtudiant():any{
    return this.http.get(this.apiURL+'condidates');
  }
  ajouterEtudiant(etudiant:any):any{
    return this.http.post(this.apiURL+'addcondidate',etudiant);
  }
  updateEtudiant(etudiant:any):any{
    console.log(etudiant);
    return this.http.put(this.apiURL+'updatecondidate',etudiant);
  }
  getEtudiant(id:any):Observable<EtudientModule>{
    return this.http.get<EtudientModule>(this.apiURL+'condidate/'+id);
  }
  deleteEtudiant(id:any):any{
    return this.http.delete(this.apiURL+'deletecondidate/'+id);
  }
  getensiegnants():any{
    return this.http.get(this.apiURL+'enseignants');
  }
  addenseignant(ensiegnant:any):any{
    return this.http.post(this.apiURL+'addenseignant',ensiegnant);
  }
  updateenseignant(ensiegnant:any):any{
    console.log(ensiegnant);
    return this.http.put(this.apiURL+'updateenseignant',ensiegnant);
  }
Deleteenseignant(id:any):any{
  return this.http.delete(this.apiURL+'deleteenseignant/'+id);

}
getenseignant(id:any):any{
  return this.http.get(this.apiURL+'enseignant/'+id);
}
getsalles():any{
  return this.http.get(this.apiURL+'salles');
}
getsalvid(date:any):any{
  return this.http.post(this.apiURL+'recherchesalvide',date);
}
getsalle(id:any):any{
  return this.http.get(this.apiURL+'salles/'+id);
}
addSalle(salle:any):any{
  return this.http.post(this.apiURL+'salles',salle);
}
updateSalle(salle:any):any{
  return this.http.put(this.apiURL+'salles',salle);
}
deleteSalle(id:any):any{
  return this.http.delete(this.apiURL+'salles/'+id);
}
uploidefile(file:any):any{
  return this.http.post(this.apiURL+'addensexcel',file);}
}

