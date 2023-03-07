import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddrelamationComponent } from '../addrelamation/addrelamation.component';
import { StageservicesService } from '../services/stageservices.service';
import { stage } from '../stage1/stage1.component';

@Component({
  selector: 'app-consulterstage',
  templateUrl: './consulterstage.component.html',
  styleUrls: ['./consulterstage.component.scss']
})
export class ConsulterstageComponent implements OnInit {
  stages:any;
  ens:boolean=false;
  displayedColumns: string[] = [ 'nepe','neps', 'neps2','sal', 'date', 'heure','action'];
  dataSource = new MatTableDataSource<stage>();
  id:any="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private stage:StageservicesService,private dialog:MatDialog) { }
public enseignant:any;
  ngOnInit(): void {
  }
cin = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
getErrorMessage() {
    
    if(this.cin.hasError('minlength')){
      return 'CIN must be 8 characters';
    }
    if(this.cin.hasError('maxlength')){
      return 'CIN must be 8 characters';
    }
    if (this.cin.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getstage(){
    if(this.cin.valid){
      const cin ={
        cin:this.cin.value
      }
   this.stage.consulter(cin).subscribe(data=>{
   
      this.stages=data;
this.ens=this.stages[1];
      this.dataSource.data=this.stages[0];
      console.log(this.dataSource.data)
    });

  }}
  openrecla(id:any){
   
this.dialog.open(AddrelamationComponent,{ 
  data : {
   cin :this.cin.value,
   id:id,
   width:'30%',
   height:'30%',
   top:'500px'}
  }
    );


  }
}
