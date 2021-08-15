import { Component, OnInit } from '@angular/core';
import { AppMenuService } from '../service/app-menu.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appMenuService:AppMenuService) { }

  ngOnInit(): void {
    this.dologout();
    this.appMenuService.atHome(false);
    this.appMenuService.atLogout(false);
    this.appMenuService.atQuestions(false);
    sessionStorage.clear();
    localStorage.clear();

  }
  dologout()
  {
    // sessionStorage.removeItem("authenticaterUser");
    // sessionStorage.removeItem("token");
    // localStorage.removeItem("auditQuestions");
    // localStorage.removeItem("auditType");
    // sessionStorage.clear();
    // localStorage.clear();
  }

}
