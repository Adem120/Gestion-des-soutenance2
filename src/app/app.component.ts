import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiURL: string = 'http://127.0.0.1:8000/api/auth/';
public role:any;
  title = 'systeme de gestion de stage';
  sideBarOpen = true;
constructor(public login:LoginService,private router:Router,private http:HttpClient){}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
 ngOnInit(): void {
  if(!this.login.getToken() && this.router.url!='/resetpassword'){
    
    this.login.logout();
    this.router.navigate(['/login']);
   
  }
 }
 

}
