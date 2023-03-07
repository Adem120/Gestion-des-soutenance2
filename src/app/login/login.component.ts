import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
declare const openLoginInfo:any;
declare const closeLoginInfo:any;
declare const login:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
token:any;
error:any=[];
er:boolean=false;
  constructor(public logins:LoginService,private router:Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
   login()
  }
email = new FormControl('', [Validators.required, Validators.email,]);
password = new FormControl('', [Validators.required, Validators.minLength(5)]);
getErrorMessage() {
           
if(this.password.hasError('required')) {
    return 'entrer password';
  }
  else if(this.password.hasError('minlength')) {
    return 'password doit contenir au moins 5 caractères';
  }
  else if(this.email.hasError('required')) {
    return 'entrer email';
  }
  else if(this.email.hasError('email')) {
    return 'email invalide';
  }
}
closeLoginInfo(){
  closeLoginInfo();
}
openLoginInfo(){
  openLoginInfo();}
 login(){
  if(this.email.valid && this.password.valid){
    const user = {
      email:this.email.value,
      password:this.password.value
    }
    this.logins.login(user).subscribe(
      data=> {
        this.token=data;
        
    this.logins.saveToken(this.token);
    this.router.navigate(['/dashboard']);
        
      },
      error=>{this.handleError(error)} 
    )
  }}
      handleError(error:any){
        this.error=error.error.error;
        this.snack.open(this.error,'ok',{duration:3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass:'error',});
      }
     

}
