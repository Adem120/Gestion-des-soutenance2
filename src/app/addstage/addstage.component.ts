import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StageModule } from '../etudient/stage/stage.module';
import { EtudientserviceService } from '../services/etudientservice.service';
import { StageservicesService } from '../services/stageservices.service';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.scss']
})
export class AddstageComponent implements OnInit {
currentstage=new StageModule();
  error:any=[];
  errors:any=[];
  diag:boolean=false;
  typedialoge:boolean;
  id:number;
  stage:any={};
  stage2:any={};
 iddat:any;
  snaik:boolean=false;
  file:File=null;
  erorrfile:string;
  etudiants:any=[];
  ensegnants:any=[];
  dates:any=[];
  date:number;
  datepossibe:any=[];
  dateselect:any;
  iddate:any;
  salle:any=[];
  typestage:any;
    constructor(private serviceet:EtudientserviceService,private service:StageservicesService,private dialog:MatDialogRef<AddstageComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private snack:MatSnackBar) {  this.typestage=data.typestage,
      this.id=data.id;
    }
  up:boolean=false;
 
  
    ngOnInit(): void {

      this.service.currentType.subscribe((data)=>{
        
          this.typedialoge=data;
          
          if(this.typedialoge==true){
            this.service.getstagebyid(this.id).subscribe((data)=>{

                this.stage2=data;
                this.stage2.forEach(element => {
                  this.stage=element;
                 
                 
                });
                this.idetud.setValue(this.stage.idetud);
                this.idens.setValue(this.stage.idens);
                this.idens2.setValue(this.stage.idens2);
                this.datedebut.setValue(this.stage.iddate);
                this.idsal.setValue(this.stage.idsal);
                this.date=this.stage.iddate;
                this.sessionpossible(this.date)
           })
        
        }
        })
        
            
      
 if(this.typedialoge==false){
  this.service.listetudientnoneffectué().subscribe((data)=>{
    this.etudiants=data;
   
  })}else{
    this.serviceet.listeEtudiant().subscribe((data)=>{
      this.etudiants=data;
     
    })
  }
  this.serviceet.getensiegnants().subscribe((data)=>{
    this.ensegnants=data;
    
  })
  this.service.getdate().subscribe((data)=>{

    this.dates=data;
  })
  
 

 

   
  }

    idetud =new FormControl('', [Validators.required,]);
    idens = new FormControl('', [Validators.required,]);
   idens2 =new FormControl('', [Validators.required,]);
idsal= new FormControl('', [Validators.required,]);
    tystage =new FormControl('', [Validators.required]);
    datedebut =new FormControl('', [Validators.required]);
    heure =new FormControl('', [Validators.required]);
sessionpossible(id:any){
  this.iddat=id;
  const date={
    id:id,
    stage:this.typestage,
  }
  this.service.getdatepossible(date).subscribe((data)=>{
   
    this.datepossibe=data;
    if(this.typedialoge==true){
    this.heure=this.stage.heuredebut;
     this.salvid(this.heure);}
  } 
 
  )}

  salvid(heure:any){
    const date={
      date:this.iddat,
      heure:heure,
      typestage:this.typestage,}
      if(this.typedialoge==false){
    this.serviceet.getsalvid(date).subscribe((data)=>{
      this.salle=data;
      this.idsal.setValue(this.stage.idsal);

    })}else{
      this.serviceet.getsalles().subscribe((data)=>{
        this.salle=data;
       
        this.idsal.setValue(this.stage.idsal);
  
      })
    }
  }
  
   
  addstage(){
    this.error=[];
  if(this.idsal.valid){
const stage1={
  idetud:this.idetud.value,
  idens:this.idens.value,
  idens2:this.idens2.value,
  stage:this.typestage,
  idsal:this.idsal.value,
  iddate:this.date,
 heuredebut:this.heure,}
if(this.typedialoge==false){
  this.service.addstage(stage1).subscribe((data)=>{
    this.handelsucess(data);
  },(error)=>{
    this.handleError(error);
  })
  }else{
    const stage2={
      id:this.stage.id,
      idetud:this.idetud.value,
      idens:this.idens.value,
      idens2:this.idens2.value,
      stage:this.typestage,
      idsal:this.idsal.value,
      iddate:this.date,
     heuredebut:this.heure
    }
    console.log(stage2)
  }



}}
  getErrorMessage() {
if(this.idsal.hasError('required')){
  return 'Ce champ est obligatoire';}}
  
  
  handleError(error:any){
    this.error=error.error;
  }
  handelsucess(data:any){
    if(data){
     
   
   if(this.typedialoge==false){
    this.dialog.close();
   this.snack.open('Stage ajouté avec succès','',{duration:4000,
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
  
   handleErrors(error:any){
  this.errors=error.error.error;
    
  if(this.erorrfile){
   this.erorrfile=error.error.error.file[0];}else{
  
    this.errors.forEach(element => {
      
    
 
      
    }
    );
  }}
  
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
  