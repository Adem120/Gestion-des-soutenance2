import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StageservicesService } from '../services/stageservices.service';

@Component({
  selector: 'app-responserec',
  templateUrl: './responserec.component.html',
  styleUrls: ['./responserec.component.scss']
})
export class ResponserecComponent implements OnInit {
  id: number;
  idens: number;
  error :any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:StageservicesService,private snack:MatSnackBar,private dialog:MatDialogRef<ResponserecComponent>) {
    this.id = data.id;
    this.idens = data.idens;
  }

  ngOnInit(): void {
  }
  response = new FormControl('', [Validators.required,]);
  getErrorMessage() {
    if (this.response.hasError('required')) {
      return 'You must enter a value';
    }
  }
  responseenv() { 
    if(this.response.valid){
      const data={
        id:this.id,
        idens:this.idens,
        reponse:this.response.value}
this.service.repondrerecl(data).subscribe(data=>this.handelsucess(data),error=>this.handleError(error));
    }
  }
  handleError(error:any){
    this.error=error.error.errors;
  }
  handelsucess(data:any){
    if(data){
   this.snack.open('Votre repondre a éte envoiyer','',{duration:4000,
   verticalPosition: 'top',
   horizontalPosition: 'right',
   panelClass:'success',
   
   
   });
  
  this.dialog.close();
  }}
}
