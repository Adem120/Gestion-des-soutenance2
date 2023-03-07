import { createViewChild } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AddresponsableComponent } from '../addresponsable/addresponsable.component';
import { ResponsableservivceService } from '../services/responsableservivce.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-responsable-parcours',
  templateUrl: './responsable-parcours.component.html',
  styleUrls: ['./responsable-parcours.component.scss']
})
export class ResponsableParcoursComponent implements OnInit {
  public typedialog:boolean=true;
  responsable:any;
  displayedColumns: string[] = [ 'name','firstname', 'email','role','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private services:ResponsableservivceService,private snack:MatSnackBar,private dialog:MatDialog,private activateroute:ActivatedRoute) { }
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
     this.getsalles();
    
    }
    getsalles(){
      this.services.getall().subscribe(data=>{
        this.responsable=data;
        this.dataSource.data=this.responsable;
        console.log(this.responsable);
      }
      );
    }
     deleteetud(element:any){
      console.log(element.id);
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
            this.snack.open('Responsable supprimé avec succés','ok',{duration:3000
            ,verticalPosition:'top'
            ,horizontalPosition:'right',
            panelClass:'error'});
            this.services.delete(element.id).subscribe(data=>{
              this.ngOnInit();
              
              }  );

             
          

          } else if (result.dismiss === swal.DismissReason.cancel) {
            
          }
        })
        
      }
  openDialog() {
   this.dialog.open(AddresponsableComponent, {
      data: {
        typedialoge:false,
        width:'30%',
        height:'30%',
        top:'500px'
        
      },
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
    
  }
  openDialoge(element:any) {
  
 

  this.dialog.open(AddresponsableComponent, {
    data: {
      typedialoge:true,
      id:element,
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
  name: string;
  firstname: string;
  email: string;
  role: string;
  

  
  }