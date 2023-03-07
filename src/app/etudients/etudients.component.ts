
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
import { ResourceLoader } from '@angular/compiler';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-etudients',
  templateUrl: './etudients.component.html',
  styleUrls: ['./etudients.component.scss']
})

export class EtudientsComponent implements OnInit,AfterViewInit {
  update:boolean=false;
public typedialog:boolean=true;
  etudiants:any;
  Role;
displayedColumns: string[] = ['cin','position', 'name', 'symbol','stage','groupe','actions'];
dataSource = new MatTableDataSource<PeriodicElement>();
constructor(private log:LoginService,private router:Router,private snack:MatSnackBar,private dialog:MatDialog,private services:EtudientserviceService,private activateroute:ActivatedRoute) {
  
 }
id:any="";
@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}
ngOnInit(): void {
  this.log.getuser().subscribe((data)=>{

    this.Role=data.role;
    console.log(this.Role);
    })
 this.services.listeEtudiant().subscribe(data=>{
  this.etudiants=data;
  console.log(this.etudiants);
  this.dataSource.data=this.etudiants;
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
        text: 'do you want to delete this student',
        icon: 'warning',
        confirmButtonColor: 'red',
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
        position:'top',
         
      }).then((result) => {
        if (result.value) {
          this.snack.open('Etudiant supprimé avec succés','ok',{duration:3000
          ,verticalPosition:'top'
          ,horizontalPosition:'right',
          panelClass:'error'});
          this.services.deleteEtudiant(element.id).subscribe(data=>{
            this.ngOnInit();
            
            }
            );
            this.router.navigateByUrl('/etudients');             
        } else if (result.dismiss === swal.DismissReason.cancel) {
          
        }
      })
      
    }
openDialog() {
 this.dialog.open(AddEtudiantComponent, {
    data: {
      width:'30%',
      top:'500px'
    },
  }).afterClosed().subscribe(result => {
  this.ngOnInit();
  })
}
openDialoge(element:any) {

this.services.changeId(element.id);

  this.dialog.open(UpdateEtudientComponent, {
  
         
    data: {
      width:'30%',
      top:'500px'
    },
  }).afterClosed().subscribe(result => {
    this.ngOnInit();
  })
}

}

export interface PeriodicElement {
id:number;
cin: number;
nom: string;
prenom: string;

parcours: string;
groupe: string;
stage: number;

}

