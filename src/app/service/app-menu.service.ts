import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {
  athome:boolean=false;
  atquestions:boolean=false;
  atstatus:boolean=false;
  atlogout:boolean=false;
  constructor() { }
  atHome(bool:boolean)
  {
    this.athome=bool
  }
  atQuestions(bool:boolean)
  {
    this.atquestions=bool;
  }
  atStatus(bool:boolean)
  {
    this.atstatus=bool;
  }
  atLogout(bool:boolean)
  {
    this.atlogout=bool;
  }

}
