import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
Role :any;
  constructor(public login:LoginService) { }

  ngOnInit(): void {
this.login.getuser().subscribe((data)=>{

this.Role=data.role;

})


}


getrole():any{
  if(this.Role=="ADMIN" || this.Role=="TI"){
    return true;
  }else {
    return false;
  }}
getadmin():any{
  if(this.Role=="ADMIN"){
    return true;
  }else {
    return false;
  }}
getrole1():any{
  if(this.Role!="TI"){
    return true;
  }else {
    return false;
  }}
}
