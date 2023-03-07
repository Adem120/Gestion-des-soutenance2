
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
import { AddsalleComponent } from '../addsalle/addsalle.component';
@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.scss']
})
export class SalleComponent implements OnInit {

  
  public typedialog:boolean=true;
  salles:any;
  displayedColumns: string[] = [ 'num', 'block','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private snack:MatSnackBar,private dialog:MatDialog,private services:EtudientserviceService,private activateroute:ActivatedRoute) { }
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
     this.getsalles();
    

    
    }
    getsalles(){
      this.services.getsalles().subscribe(data=>{
        this.salles=data;
        this.dataSource.data=this.salles;
        console.log(this.salles);
      }
      );
    }
      deleteetud(element:any){
        swal.fire({
          title: 'Are you sure?',
          text: 'do you want to delete this salle',
          icon: 'warning',
          confirmButtonColor: 'red',
          confirmButtonText: 'Yes, delete it!',
          showCancelButton: true,
          position:'center',
           
        }).then((result) => {
          if (result.value) {
            this.snack.open('salles supprimé avec succés','ok',{duration:3000
            ,verticalPosition:'top'
            ,horizontalPosition:'right',
            panelClass:'error'});
            this.services.deleteSalle(element.id).subscribe(data=>{
              this.ngOnInit();
              
              }  );

             
          

          } else if (result.dismiss === swal.DismissReason.cancel) {
            
          }
        })
        
      }
  openDialog() {
   this.dialog.open(AddsalleComponent, {
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
  this.dialog.open(AddsalleComponent, {
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
  numero: string;
  block: string;
  

  
  }