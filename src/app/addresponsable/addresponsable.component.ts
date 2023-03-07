import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEnsiengnantComponent } from '../add-ensiengnant/add-ensiengnant.component';
import { ResponsableservivceService } from '../services/responsableservivce.service';
@Component({
  selector: 'app-addresponsable',
  templateUrl: './addresponsable.component.html',
  styleUrls: ['./addresponsable.component.scss']
})
export class AddresponsableComponent implements OnInit {

  error:any=[];
errors:any=[];
diag:boolean=false;
typedialoge:boolean;
id:number;
enseignant:any;
snaik:boolean=false;
file:File=null;
erorrfile:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:ResponsableservivceService,private dialog:MatDialogRef<AddEnsiengnantComponent>,private snack:MatSnackBar) {
    this.typedialoge=data.typedialoge;
    this.id=data.id;
   }
up:boolean=false;
  ngOnInit(): void {
  
        
   
           
     if(this.typedialoge==true){
      this.service.getone(this.id).subscribe((data)=>{
        
          this.enseignant=data;
        
this.id=this.enseignant.id;
this.nom.setValue(this.enseignant.firstname);
this.emails.setValue(this.enseignant.email);
this.prenom.setValue(this.enseignant.name);
this.role.setValue(this.enseignant.role);

     })
   
  }}
 
  password =new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]);
  emails = new FormControl('', [Validators.required, Validators.email]);
  nom =new FormControl('', [Validators.required]);
  prenom =new FormControl('', [Validators.required]);
  role =new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    if (this.emails.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.nom.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.prenom.hasError('required')){
      return 'You must enter a value';}
     
      

    if(this.emails.hasError('email')){
      return 'Not a valid email';
    }
    if(this.password.hasError('required')){
      return 'You must enter a value';
    }
    if(this.password.hasError('minlength')){
      return 'cin must be 8 digits';
    }
    if(this.password.hasError('maxlength')){
      return 'cin must be 8 digits';
    }
  }
addresponsable(){
  if(this.typedialoge==false){
  this.error=[];
  if(this.nom.valid && this.prenom.valid && this.emails.valid && this.password.valid &&this.role.valid){
    const responsable={
      password:this.password.value,
      firstname:this.nom.value,
      name:this.prenom.value,
      email:this.emails.value,
      role:this.role.value
     
    }

   
    this.service.create(responsable).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));}
  
  }else{
 
    const responsablee={
      id:this.id,
      
      name:this.nom.value,
      firstname:this.prenom.value,
      email:this.emails.value,
      role:this.role.value}
  
 
 if(this.nom.valid && this.prenom.valid && this.emails.valid &&this.role.valid)   {
    console.log(responsablee);
    this.snaik=true;
    this.service.update(responsablee).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));
 }
  
}

}
handleError(error:any){
  this.error=error.error.errors;
}
handelsucess(data:any){
  
  if(data){
   
 
 if(this.typedialoge==false){
  this.dialog.close();
 this.snack.open('Responsable ajouté avec succès','',{duration:4000,
 verticalPosition: 'top',
 horizontalPosition: 'right',
 panelClass:'success',

 
 });}else{
console.log(data);
  this.dialog.close();
  this.snack.open('Responsable modifié avec succès','',{duration:4000,
  verticalPosition: 'top',
  horizontalPosition: 'right',
  panelClass:'success',
 
  });
 }

  }
}
}