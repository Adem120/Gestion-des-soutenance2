import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
error:any;
  constructor(private login:LoginService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  email =new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Enter your email';
    }
    if (this.email.hasError('email')) {
      return 'email is not valid';
    }
  }
  reset(){
    if(this.email.valid){
      const email={
        email:this.email.value
      }
     this.login.resetpassword(email).subscribe(
        data=>{this.handelsecsuccess(data)},
     error=>{this.handleError(error)}   
      )
      console.log(this.email.value);
    }

  }
  handleError(error:any){
    this.error=error.error.message;
    this.snack.open(this.error,'ok',{duration:3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass:'error',});
  }
  handelsecsuccess(data:any){
    this.snack.open('check your email','ok',{duration:3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass:'success',});
  }

}

