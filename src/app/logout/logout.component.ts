import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dologout();
  }
  dologout()
  {
    sessionStorage.removeItem("authenticaterUser");
    sessionStorage.removeItem("token");
    localStorage.removeItem("auditQuestions");
    localStorage.removeItem("auditType");
    sessionStorage.clear();
    localStorage.clear();
  }

}
