import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {MatSnackBar} from '@angular/material/snack-bar';
import { EtudientserviceService } from '../services/etudientservice.service';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent implements OnInit {
error:any=[];
sucess:any=[];
  constructor(private dialog:MatDialog,private services:EtudientserviceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
 
  }
  cin =new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]);
  emails = new FormControl('', [Validators.required, Validators.email]);
  nom =new FormControl('', [Validators.required]);
  prenom =new FormControl('', [Validators.required]);
  groupe =new FormControl('', [Validators.required]);
  parcours =new FormControl('', [Validators.required]);
  stage =new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.emails.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.nom.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.prenom.hasError('required')){
      return 'You must enter a value';}
      if(this.groupe.hasError('required')){
        return 'You must enter a value';
      }
      if(this.parcours.hasError('required')){
        return 'You must enter a value';
      } 
      if(this.stage.hasError('required')){
        return 'You must enter a value';
      }

  
    if(this.cin.hasError('required')){
      return 'You must enter a value';
    }
    if(this.cin.hasError('minlength')){
      return 'Cin must be 8 numbers';
    }
    if(this.cin.hasError('maxlength')){
      return 'Cin must be 8 numbers';
    }

  }
ajouterEtudiant(){
  this.error=[];
  if(this.nom.valid && this.prenom.valid && this.groupe.valid && this.parcours.valid && this.stage.valid && this.cin.valid){
  const etudiant={
    cin:this.cin.value,
    nom:this.nom.value,
    prenom:this.prenom.value,

    groupe:this.groupe.value,
    parcours:this.parcours.value,
    stage:this.stage.value
  }
  console.log(etudiant)
  this.services.ajouterEtudiant(etudiant).subscribe(data=>this.handelsucess(data),error=>this.handleError(error));
  


  }


}
handleError(error:any){
  this.error=error.error.errors;
  console.log(this.error)
}
handelsucess(data:any){
 if(data){
this.dialog.closeAll()

this.dialog.open(AddEtudiantComponent)
this.snack.open('Etudiant ajouté avec succès','',{duration:4000,
verticalPosition: 'top',
horizontalPosition: 'right',
panelClass:'success',


});
 }
}
}
