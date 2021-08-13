import { Component, OnInit } from '@angular/core';
import { CheckListQuestionsService } from '../service/check-list-questions.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { QuestionsDataService } from '../service/questions-data.service';
import { Data, Router } from '@angular/router';
import { AuditResponseService } from '../service/audit-response.service';
import { AuditDetail } from '../questions/questions.component';
import { AppMenuService } from '../service/app-menu.service';
export class AuditType{
  auditType:string;
  constructor(aType:string)
  {
    this.auditType=aType;
  }
}
export class QuestionEntity
{
  questionId:number;
  auditType:string;
  question:string;
  response:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectName:string='';
  projectMangerName:string='';
  applicationOwner:string='';
  aType:string='';
  auditType:AuditType;

  questionEntity:QuestionEntity[];
  isNotValid:boolean=false;


  constructor(private checkListServive:CheckListQuestionsService,
    private dataService:QuestionsDataService,
    private auditResponse:AuditResponseService,
    private appMenuService:AppMenuService,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    // this.appMenuService.atHome();
    this.appMenuService.atHome(false);
    this.appMenuService.atQuestions(false);
  }
  // getCheckListQuestions()
  // {
    //this.auditType=new AuditType(this.aType);
  // this.checkListServive.executeCheckListQuestions(this.aType).subscribe(
  //   data=>
  //   {
  //     console.log(`hardik this is ${data}`);
  //   }
  // );
  // let token=sessionStorage.getItem("token");
  // let tokenStr=`Bearer ${token}`;
  //   const headers:HttpHeaders=new HttpHeaders().set('Authorization',tokenStr);
  // console.log(sessionStorage.getItem("token"));
  // console.log(headers);
  // this.checkListServive.executeCheckListQuestions(this.aType).subscribe(
  //   data=>{
  //     console.log(data);
  //   }
  // )
  // }
  getCheckListQuestions()
  {
    if(this.projectName==''||this.applicationOwner==''||this.projectMangerName=='')
    {
      this.isNotValid=true;
      this.router.navigate(['home']);
    }
    else{
    this.auditType=new AuditType(this.aType);
    console.log(this.auditType);
    this.checkListServive.executeCheckListQuestions2(this.auditType).subscribe(
      data=>{
        console.log(data);
        this.questionEntity=data;
        this.dataService.getDatafromHome(this.auditType,this.questionEntity);
        this.router.navigate(['questions'])
        localStorage.setItem("auditType",JSON.stringify(this.auditType));
        localStorage.setItem("auditQuestions",JSON.stringify(data));
        localStorage.setItem("projectName",this.projectName);
        localStorage.setItem("projectManagerName",this.projectMangerName);
        localStorage.setItem("applicationOwner",this.applicationOwner);
      }
    )
  }
}
}
