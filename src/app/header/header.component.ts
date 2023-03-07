import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
loginuser:any;
  constructor(private router: Router,public logins:LoginService) {}

  ngOnInit(): void {
 
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout(){
    this.logins.logout();
    this.router.navigate(['/login']);
  }
}
