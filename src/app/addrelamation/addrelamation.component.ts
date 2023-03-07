import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StageservicesService } from '../services/stageservices.service';

@Component({
  selector: 'app-addrelamation',
  templateUrl: './addrelamation.component.html',
  styleUrls: ['./addrelamation.component.scss']
})
export class AddrelamationComponent implements OnInit {
cin :any
idetud:any
error:any=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service:StageservicesService,private dialog:MatDialogRef<AddrelamationComponent>,private snack:MatSnackBar) { 
  this.cin=data.cin;
  this.idetud=data.id;
  }

  ngOnInit(): void {
  }
  sujet = new FormControl('', [Validators.required,]);
  description= new FormControl('', [Validators.required,]);
  getErrorMessage() {
    if (this.sujet.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.description.hasError('required')) {
      return 'You must enter a value';
    }
  }
ajoutereclamation(){
if(this.sujet.valid && this.description.valid){
  const reclamation={
    idetud:this.idetud,
    cin:this.cin,
    sujet:this.sujet.value,
    description:this.description.value
  }
  console.log(reclamation);
  this.service.ajoutreclamation(reclamation).subscribe(data=> this.handelsucess(data),error=>this.handleError(error))
  
  
}
}
handleError(error:any){
  this.error=error.error.errors;
  console.log(this.error)
}
handelsucess(data:any){
 if(data){
this.dialog.close()
 
this.snack.open('Reclamation envoyeé avec succès','',{duration:4000,
verticalPosition: 'top',
horizontalPosition: 'right',
panelClass:'success',


});
 }
}

}
