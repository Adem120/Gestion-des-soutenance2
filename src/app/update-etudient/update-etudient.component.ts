import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EtudientModule } from '../etudient/etudient.module';
import { EtudientserviceService } from '../services/etudientservice.service';

@Component({
  selector: 'app-update-etudient',
  templateUrl: './update-etudient.component.html',
  styleUrls: ['./update-etudient.component.scss']
})
export class UpdateEtudientComponent implements OnInit {
etudiant=new EtudientModule();
error:any=[];

id:number;
  constructor(private dialog:MatDialog,private service:EtudientserviceService,private activateroute:ActivatedRoute,private snack:MatSnackBar) { }

  ngOnInit(): void {
    
 this.service.currentId.subscribe((data)=>{
  console.log(data);
  
    this.id=data;
    
  })
     
    this.service.getEtudiant(this.id).subscribe((data)=>{
      console.log(data.id);
      this.etudiant=data;
      
  
    })
 
  }
  cin = new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]);
  nom =new FormControl('', [Validators.required]);
  prenom =new FormControl('', [Validators.required]);
  groupe =new FormControl('', [Validators.required]);
  parcours =new FormControl('', [Validators.required]);
  stage =new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    
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
      return 'Cin must be 8 characters';
    }
    if(this.cin.hasError('maxlength')){
      return 'Cin must be 8 characters';
    }

  }
  updateEtudiant(){
 this.error=[];
    if( this.nom.valid && this.prenom.valid && this.groupe.valid && this.parcours.valid && this.stage.valid && this.cin.valid){
    console.log(this.etudiant)
   this.service.updateEtudiant(this.etudiant).subscribe(data=>this.handelsucess(data),error=>this.handleError(error));
      
   
  }}
  handelsucess(data){
    console.log(data)
    if(data){
      this.dialog.closeAll();
      this.snack.open('Etudiant Modifier avec succès','',{duration:4000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass:'success'});
         
    }
  }
  handleError(error){
    console.log(error);
    this.error=error.error.errors;
  }
}

