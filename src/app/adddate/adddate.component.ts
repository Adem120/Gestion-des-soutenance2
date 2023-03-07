import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StageservicesService } from '../services/stageservices.service';

@Component({
  selector: 'app-adddate',
  templateUrl: './adddate.component.html',
  styleUrls: ['./adddate.component.scss']
})
export class AdddateComponent implements OnInit {
  error:any=[];
  diag:boolean=false;
  typedialoge:boolean;
  id:number;
 dates:any=[];
 hdebut:any
 possibledates:any=[];
  salles:any;
    constructor(private service:StageservicesService,@Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialogRef<AdddateComponent>,private snack:MatSnackBar) { 
      this.id=data.id;
      this.typedialoge=data.type;
    }
  up:boolean=false;
    ngOnInit(): void {
     
          this.service.getdates().subscribe((data)=>{
            this.dates=data;
            
          })
          }
     
             
     /*  if(this.typedialoge==true){
        this.service.getsalle(this.id).subscribe((data)=>{
          
            this.salles=data;
            console.log(this.salles);
          
          
  this.salles.data;
  this.id=this.salles.id;
  this.numero.setValue(this.salles.numero);
  this.block.setValue(this.salles.block);
  
       })
     
    }*/
    date = new FormControl('', [Validators.required,]);
    Hdebut =new FormControl('', [Validators.required]);
    Hfin=new FormControl('', [Validators.required]);
    getErrorMessage() {
      if (this.date.hasError('required')) {
        return 'You must enter a value';
      }
      if (this.Hdebut.hasError('required')) {
        return 'You must enter a value';
      }
     
  
      if(this.Hfin.hasError('email')){
        return 'Not a valid email';
      }
    }
  addEnseignant(){
    this.error=[];
    if(this.date.valid && this.Hdebut.valid && this.Hfin.valid){
      
    const udate={
      id:this.id,
      datedebut:this.date.value,
      heuredebut:this.Hdebut.value,
      heurefin:this.Hfin.value,
    }
    const date={
      datedebut:this.date.value,
      heuredebut:this.Hdebut.value,
      heurefin:this.Hfin.value,

    }
 
    if(this.typedialoge==false){
    this.service.createdate(date).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));}
    else{
     
     // this.service.updateSalle(salle).subscribe( data=>this.handelsucess(data),error=>this.handleError(error));
    }
    
  }}
  

  
  
  handleError(error:any){
    this.error=error.error.errors;
  }
  handelsucess(data:any){
    if(data){
      if(this.typedialoge==false){
   this.snack.open('Date ajouté avec succès','',{duration:4000,
   verticalPosition: 'top',
   horizontalPosition: 'right',
   panelClass:'success',
   
   
   });
  
  this.dialog.close();
  }
    else{
      this.snack.open('Date modifié avec succès','',{duration:4000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass:'success',
        
        
        });
      
      this.dialog.close();
      }
  
    }
   }
   
  }