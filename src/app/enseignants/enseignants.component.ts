
import { AfterViewInit, Component, OnInit, ViewChild,Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEtudiantComponent } from '../add-etudiant/add-etudiant.component';
import { EtudientserviceService } from '../services/etudientservice.service';
import { UpdateEtudientComponent } from '../update-etudient/update-etudient.component';
import swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEnsiengnantComponent } from '../add-ensiengnant/add-ensiengnant.component';
import { Location } from '@angular/common';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html',
  styleUrls: ['./enseignants.component.scss']
})
export class EnseignantsComponent implements OnInit {

  public typedialog:boolean=true;
  ensiegnants:any;
  displayedColumns: string[] = [ 'cin','nom', 'prenom', 'email','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  Role:any;
  constructor(private login:LoginService,private snack:MatSnackBar,private dialog:MatDialog,private services:EtudientserviceService,private activateroute:ActivatedRoute) { }
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
     this.getenseignant();
     this.login.getuser().subscribe((data)=>{

      this.Role=data.role;
      console.log(this.Role);
      })
    
    }
    
    getenseignant(){
      this.services.getensiegnants().subscribe(data=>{
        this.ensiegnants=data;
        this.dataSource.data=this.ensiegnants;
        console.log(this.ensiegnants);
      }
      );
    }
    getadmin():any{
      if(this.Role=="ADMIN"){
        return true;
      }else {
        return false;
      }}
      deleteetud(element:any){
        swal.fire({
          title: 'Are you sure?',
          text: 'do you want to delete this Enseignant',
          icon: 'warning',
          confirmButtonColor: 'red',
          confirmButtonText: 'Yes, delete it!',
          showCancelButton: true,
          position:'center',
           
        }).then((result) => {
          if (result.value) {
            this.snack.open('Ensiengnant supprimé avec succés','ok',{duration:3000
            ,verticalPosition:'top'
            ,horizontalPosition:'right',
            panelClass:'error'});
            this.services.Deleteenseignant(element.id).subscribe(data=>{
              this.ngOnInit();
              console.log(this.ensiegnants);
              }  );

             
          

          } else if (result.dismiss === swal.DismissReason.cancel) {
            
          }
        })
        
      }
  openDialog() {
   this.dialog.open(AddEnsiengnantComponent, {
      data: {
        width:'30%',
        height:'30%',
        top:'500px'
        
      },
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
    this.services.changetype(false);
  }
  openDialoge(element:any) {
  
  this.services.changeId(element.id);

  this.services.changetype(true);
  this.dialog.open(AddEnsiengnantComponent, {
    data: {
      width:'30%',
      height:'30%',
      top:'500px'
      
    },
  }).afterClosed().subscribe(result => {
    this.ngOnInit();
  });
 

  }
 
}
  export interface PeriodicElement {
  id:number;
  cin: string;
  nom: string;
  prenom: string;
  email: string;
  

  
  }
  
 


