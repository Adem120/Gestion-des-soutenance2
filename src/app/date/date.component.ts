import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AdddateComponent } from '../adddate/adddate.component';
import { EtudientserviceService } from '../services/etudientservice.service';
import { StageservicesService } from '../services/stageservices.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  public typedialog:boolean=true;
  date:any;
  displayedColumns: string[] = [ 'date', 'heured','heuref','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private snack:MatSnackBar,private dialog:MatDialog,private services:StageservicesService) { }
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
     this.getsalles();
    
    }
    getsalles(){
      this.services.getdate().subscribe(data=>{
        this.date=data;
        this.dataSource.data=this.date;
        console.log(this.date);
      }
      );
    } /*
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
        
      }*/
  openDialog() {
   this.dialog.open(AdddateComponent, {
      data: {
      
         type:false,
        width:'80%',
        height:'70%',
        top:'500px'
        
      },
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }/*
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
 

  }*/
 
}
  export interface PeriodicElement {
  id:number;
  date: string;
  heuredebut: string;
  heurefin: string;
  

  
  }