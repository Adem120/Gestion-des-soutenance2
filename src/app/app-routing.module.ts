import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterstageComponent } from './consulterstage/consulterstage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { EtudientsComponent } from './etudients/etudients.component';
import { GroupreclamationComponent } from './groupreclamation/groupreclamation.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResponsableParcoursComponent } from './responsable-parcours/responsable-parcours.component';
import { SalleComponent } from './salle/salle.component';
import { Stage1Component } from './stage1/stage1.component';
import { StagesComponent } from './stages/stages.component';
import { UpdateEtudientComponent } from './update-etudient/update-etudient.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'etudients',component:EtudientsComponent},
  {path:'etudients/:id',component:EtudientsComponent},
  {path:'ensiegnants',component:EnseignantsComponent},
  {path:'salles',component:SalleComponent},
  {path:'login',component:LoginComponent},
  {path:'responsable',component:ResponsableParcoursComponent},
  {path:'stage',component:StagesComponent},
  {path:'stage1',component:Stage1Component},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'date',component:DateComponent},
  {path:'consulter',component:ConsulterstageComponent},
  {path:'reclamation',component:GroupreclamationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
