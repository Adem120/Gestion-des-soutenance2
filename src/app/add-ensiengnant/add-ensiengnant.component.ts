import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnseignantsComponent } from '../enseignants/enseignants.component';
import { EtudientserviceService } from '../services/etudientservice.service';

@Component({
  selector: 'app-add-ensiengnant',
  templateUrl: './add-ensiengnant.component.html',
  styleUrls: ['./add-ensiengnant.component.scss']
})
export class AddEnsiengnantComponent implements OnInit {
error:any=[];
errors:any=[];
diag:boolean=false;
typedialoge:boolean;
id:number;
enseignant:any;
snaik:boolean=false;
file:File=null;
erorrfile:string;
  constructor(private service:EtudientserviceService,private dialog:MatDialogRef<AddEnsiengnantComponent>,private snack:MatSnackBar) { }
up:boolean=false;
  ngOnInit(): void {
    this.service.currentType.subscribe((data)=>{
      console.log(data);
      
        this.typedialoge=data;
        
      })
      this.service.currentId.subscribe((data)=>{
        console.log(data);
        
          this.id=data;
          
        })
           
     if(this.typedialoge==true){
      this.service.getenseignant(this.id).subscribe((data)=>{
        
          this.enseignant=data;
          console.log(this.enseignant.email);
        
this.enseignant=data;
this.id=this.enseignant.id;
this.cin.setValue(this.enseignant.cin);
this.nom.setValue(this.enseignant.nom);
this.emails.setValue(this.enseignant.email);
this.prenom.setValue(this.enseignant.prenom);

     })
   
  }}
  cin =new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]);
  emails = new FormControl('', [Validators.required, Validators.email]);
  nom =new FormControl('', [Validators.required,Validators.minLength(5)]);
  prenom =new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    if (this.emails.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.nom.hasError('required')) {
      return 'champs obligatoire';
    }
    if(this.prenom.hasError('required')){
      return 'You must enter a value';}
     
      

    if(this.emails.hasError('email')){
      return 'Not a valid email';
    }
    if(this.cin.hasError('required')){
      return 'You must enter a value';
    }
    if(this.cin.hasError('minlength')){
      return 'cin must be 8 digits';
    }
    if(this.cin.hasError('maxlength')){
      return 'cin must be 8 digits';
    }
   
  }
addEnseignant(){
  
  this.error=[];
  if(this.nom.valid && this.prenom.valid && this.emails.valid && this.cin.valid){
    
  const enseignant={
    id:this.id,
    cin:this.cin.value,
    nom:this.nom.value,
    prenom:this.prenom.value,
    email:this.emails.value,
  
  }
  const enseignants={
    cin:this.cin.value,
    nom:this.nom.value,
    prenom:this.prenom.value,
    email:this.emails.value,
   
  }
  console.log(enseignant);
  if(this.typedialoge==false){
  this.service.addenseignant(enseignants).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));}
  else{
    this.snaik=true;
    this.service.updateenseignant(enseignant).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));
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
 this.snack.open('Ensiengnant ajouté avec succès','',{duration:4000,
 verticalPosition: 'top',
 horizontalPosition: 'right',
 panelClass:'success',

 
 });}else{
  this.dialog.close();
  this.snack.open('Ensiengnant modifié avec succès','',{duration:4000,
  verticalPosition: 'top',
  horizontalPosition: 'right',
  panelClass:'success',
 
  });
 }

  }
 }
 onFileSelected(event){
  this.file=<File>event.target.files[0];
  
 }
 onuploide(){
  this.errors=[];
  const fd=new FormData();
  fd.append('file',this.file,this.file.name);
  
  this.service.uploidefile(fd).subscribe(data=> this.handelsucesss(data),error=>this.handleErrors(error));
   
    
  
 }
 handleErrors(error:any){
this.errors=error.error.error;
this.erorrfile=this.errors.file[0];
 console.log(this.errors.file[0]);
}

handelsucesss(data:any){
  
  if(data){
   
 
 
  this.dialog.close();
 this.snack.open('Tous les Ensiengnant ajouté avec succès','',{duration:4000,
 verticalPosition: 'top',
 horizontalPosition: 'right',
 panelClass:'success',

 
 });

  }
 
}
}
