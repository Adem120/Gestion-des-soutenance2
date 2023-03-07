import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { EtudientsComponent } from './etudients/etudients.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UpdateEtudientComponent } from './update-etudient/update-etudient.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { AddEnsiengnantComponent } from './add-ensiengnant/add-ensiengnant.component';
import { SalleComponent } from './salle/salle.component';
import { AddsalleComponent } from './addsalle/addsalle.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { ResponsableParcoursComponent } from './responsable-parcours/responsable-parcours.component';
import { TokenInterceptor } from './token-interceptor.service';
import { StagesComponent } from './stages/stages.component';
import { Stage1Component } from './stage1/stage1.component';
import { AddstageComponent } from './addstage/addstage.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DateComponent } from './date/date.component';
import { AddresponsableComponent } from './addresponsable/addresponsable.component';
import { AdddateComponent } from './adddate/adddate.component';
import { ConsulterstageComponent } from './consulterstage/consulterstage.component';
import { AddrelamationComponent } from './addrelamation/addrelamation.component';
import { GroupreclamationComponent } from './groupreclamation/groupreclamation.component';
import { ResponserecComponent } from './responserec/responserec.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    
    EtudientsComponent,
    
    AddEtudiantComponent,
    
    UpdateEtudientComponent,
    
    EnseignantsComponent,
    
    AddEnsiengnantComponent,
    
    SalleComponent,
    
    AddsalleComponent,
    
    LoginComponent,
    
    ResponsableParcoursComponent,
    
    StagesComponent,
    
    Stage1Component,
    
    AddstageComponent,
    
    ResetpasswordComponent,
    
    DateComponent,
    
    AddresponsableComponent,
    
    AdddateComponent,
    
    ConsulterstageComponent,
    
    AddrelamationComponent,
    
    GroupreclamationComponent,
    
    ResponserecComponent,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
     

  
   
 
  

   
   
 
  
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass :TokenInterceptor ,
    multi : true}],  bootstrap: [AppComponent],
})

export class AppModule {}
