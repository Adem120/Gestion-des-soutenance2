import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  apiURL: string = 'http://127.0.0.1:8000/api/auth/';
  public user:any;
 public role:any;
 public isloggedIn: Boolean = false;
  public loggedUser: string = '';
  token!: string;

  constructor(private http:HttpClient) { }
ngOnInit(): void {
}
public login(user:any):any{
  return this.http.post(this.apiURL+'login',user);
}
getToken(){
  return localStorage.getItem('token');
   }
  
saveToken(token:any){

  localStorage.setItem('token',token.access_token);
  

  this.SignIn(token.user);

}

isadmin(){
  if(this.user.role=== "admin"){
    return true;
  } else {
    return false;}}
    parcours(){
      return this.user;
    }
    logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('isloggedIn');
      this.isloggedIn = false;
    }
    SignIn(user: any) {
      this.loggedUser = user.name;
      this.isloggedIn = true;
      //this.roles = user.roles;
      localStorage.setItem('loggedUser', this.loggedUser);
      localStorage.setItem('isloggedIn', String(this.isloggedIn));
   
    }
  loginun(){
    
   return localStorage.getItem('isloggedIn');
  }
 resetpassword(email:any){
    return this.http.post(this.apiURL+'resetpassword',email);
 }
 loginuser(){
    this.user=localStorage.getItem('loggedUser');
    return this.user;
  }
getuser():Observable<any>{
  
 return this.http.get(this.apiURL+'user')
  

  
}

  
  
}


