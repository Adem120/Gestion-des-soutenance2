import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnseignantsComponent } from '../enseignants/enseignants.component';
import { EtudientserviceService } from '../services/etudientservice.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-addsalle',
  templateUrl: './addsalle.component.html',
  styleUrls: ['./addsalle.component.scss']
})
export class AddsalleComponent implements OnInit {
  error:any=[];
  diag:boolean=false;
  typedialoge:boolean;
  id:number;

  salles:any;
    constructor(private login:LoginService,private service:EtudientserviceService,private dialog:MatDialogRef<AddsalleComponent>,private snack:MatSnackBar) { }
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
        this.service.getsalle(this.id).subscribe((data)=>{
          
            this.salles=data;
            console.log(this.salles);
          
          
  this.salles.data;
  this.id=this.salles.id;
  this.numero.setValue(this.salles.numero);
  this.block.setValue(this.salles.block);
  
       })
     
    }}
    numero = new FormControl('', [Validators.required,]);
    block =new FormControl('', [Validators.required,Validators.maxLength(1)]);
    
    getErrorMessage() {
      if (this.numero.hasError('required')) {
        return 'You must enter a value';
      }
      if (this.block.hasError('required')) {
        return 'You must enter a value';
      }
     
  
      if(this.block.hasError('email')){
        return 'Not a valid email';
      }
    }
  addEnseignant(){
    console.log(this.typedialoge)
    this.error=[];
    if(this.numero.valid && this.block.valid ){
      
    const salle={
      id:this.id,
      numero:this.numero.value,
      block:this.block.value,
      
    }
    const salles={
     
      numero:this.numero.value,
      block:this.block.value,

    }
 
    if(this.typedialoge==false){
   console.log(salles);
    this.service.addSalle(salles).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));}
    else{
     
      this.service.updateSalle(salle).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));
    }
    
  }
  
  }
  handleError(error:any){
    console.log(this.error)
    this.error=error.error.errors;
    console.log(this.error)
  }
  handelsucess(data:any){
    console.log(data);
    if(data){
      if(this.typedialoge==false){
   this.snack.open('Salle ajouté avec succès','',{duration:4000,
   verticalPosition: 'top',
   horizontalPosition: 'right',
   panelClass:'success',
   
   
   });
  
  this.dialog.close();
  }
    else{
      this.snack.open('Salle modifié avec succès','',{duration:4000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass:'success',
        
        
        });
      
      this.dialog.close();
      }
  
    }
   }
   
  }