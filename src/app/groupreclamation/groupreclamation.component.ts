import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { StageservicesService } from '../services/stageservices.service';
import swal from 'sweetalert2';
import { ResponserecComponent } from '../responserec/responserec.component';
@Component({
  selector: 'app-groupreclamation',
  templateUrl: './groupreclamation.component.html',
  styleUrls: ['./groupreclamation.component.scss']
})
export class GroupreclamationComponent implements OnInit {

  public typedialog:boolean=true;
  reclamation:any;
  displayedColumns: string[] = [ 'nomet','nomens', 'sujet', 'desc','actions'];
  dataSource = new MatTableDataSource<any>();
  constructor(private snack:MatSnackBar,private dialog:MatDialog,private service:StageservicesService) { }
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
 this.service.getreclamation().subscribe(data=>{
  console.log(data);
    this.reclamation=data;
    this.dataSource.data=this.reclamation;
    console.log(this.reclamation);  
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
            this.snack.open('Reclamation supprimer','ok',{duration:3000
            ,verticalPosition:'top'
            ,horizontalPosition:'right',
            panelClass:'error'});
            this.service.deletereclamation(element.id).subscribe(data=>{
              this.ngOnInit();
              }  );

             
          

          } else if (result.dismiss === swal.DismissReason.cancel) {
            
          }
        })
        
      }
  openDialog(element:any) {

   this.dialog.open(ResponserecComponent, {
      data : {
        width:'30%',
        height:'30%',
        top:'500px',
        id: element.id,
        idens:element.idens,
        
        
      },
    }).afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
 
 
}

  
 


