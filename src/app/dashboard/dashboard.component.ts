import { Component, OnInit } from '@angular/core';
import { EtudientserviceService } from '../services/etudientservice.service';
import { LoginService } from '../services/login.service';
import { StageservicesService } from '../services/stageservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
etudiants:any;
etudients:any;
nbre:number=0;
nbretotale:number=0;
ense: any;
nbreense:number=0;
salle:any;
nbsalle:number=0;
stage1:any;
stage2:any;
nbstage1:number=0;
nbstage2:number=0;
  constructor(private service:StageservicesService,private servicee:EtudientserviceService,private log:LoginService) { }

  ngOnInit(): void {
    this.service.listetudientnoneffectué().subscribe((data)=>{
      this.etudiants=data;
      this.etudiants.forEach((element:any) => {
        this.nbre++;
      });   })
      this.servicee.listeEtudiant().subscribe((data)=>{
        this.etudients=data;
        this.etudients.forEach((element:any) => {
          this.nbretotale++;
        });
      }
      )
     this.servicee.getensiegnants().subscribe((data)=>{
        this.ense=data;
        this.ense.forEach((element:any) => {
          this.nbreense++;
        });
      }
      )
      this.servicee.getsalles().subscribe((data)=>{
        this.salle=data;
        this.salle.forEach((element:any) => {
          this.nbsalle++;
        });

      }
      )
      this.service.nombrestage().subscribe((data)=>{
        this.stage1=data;
       this.nbstage1=this.stage1.nb;
       
      }
      )
      this.service.nombrestage2().subscribe((data)=>{
        this.stage2=data;
        this.nbstage2=this.stage2.nb;
       
      } 
      )
  }

}
