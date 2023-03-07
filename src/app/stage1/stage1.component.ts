import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AddstageComponent } from '../addstage/addstage.component';
import { StageservicesService } from '../services/stageservices.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.scss']
})
export class Stage1Component implements OnInit {
  public typedialog:boolean=true;
  stages:any;
  displayedColumns: string[] = [ 'nepe','neps','sal', 'date', 'heure','actions'];
  dataSource = new MatTableDataSource<stage>();
  constructor(private snack:MatSnackBar,private dialog:MatDialog,private services:StageservicesService) { }
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.services.getstage('1').subscribe(data=>{
      this.stages=data;
      this.dataSource.data=this.stages;
   
    });
    }

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
            this.snack.open('stage supprimé avec succés','ok',{duration:3000
            ,verticalPosition:'top'
            ,horizontalPosition:'right',
            panelClass:'error'});
            this.services.deletestage(element.id).subscribe(data=>{
              this.ngOnInit();
              }  );

             
          

          } else if (result.dismiss === swal.DismissReason.cancel) {
            
          }
        })
        
      }
  openDialog() {
   this.dialog.open(AddstageComponent, {
      data: {
        width:'30%',
        height:'30%',
        top:'500px',
        typestage:1,
      },
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
    this.services.changetype(false);
  }
  openDialoge(element:any) {
  

  this.dialog.open(AddstageComponent, {
    data: {
    id:element.id,
      width:'30%',
      height:'30%',
      top:'500px',
      typestage:1,

      
   
      
      
    },
  }).afterClosed().subscribe(result => {
    this.ngOnInit();
  });
 

  }
 
  }
  export interface stage {
  id:number;
  nometud: string;
  prenometud: string;
  nomens: string;
  prenomens: string;
  nomens2: string;
  prens2: string;
  block: string;
  numsal: string;
  datedebut: string;
  heuredebut: string;
  

  
  }