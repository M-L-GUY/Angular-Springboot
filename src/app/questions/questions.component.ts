import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditType, QuestionEntity } from '../home/home.component';
import { AppMenuService } from '../service/app-menu.service';
import { AuditResponseService } from '../service/audit-response.service';
import { QuestionsDataService } from '../service/questions-data.service';

export class AuditDetail
{
  auditType:string;
  
}
//AuditDetail class
export class AuditDetails
{
  auditType:string;
  auditDate:Date;
  auditQuestions:QuestionEntity[];
  // ,aDate:Date
  constructor(aType:string,aDate:Date,aQuestions:QuestionEntity[],
    )
  {
    this.auditType=aType;
    this.auditDate=aDate;
    this.auditQuestions=aQuestions;
  }
}
//AuditRequestClass
export class AuditRequest{
  projectName:string;
  projectManagerName:string;
  applicationOwnerName:string;
  auditDetails:AuditDetails;
  constructor(projectName:string,projectManagerName:string,applicationOwnerName:string,auditDetail:AuditDetails)
  {
    this.projectName=projectName;
    this.projectManagerName=projectManagerName;
    this.applicationOwnerName=applicationOwnerName;
    this.auditDetails=auditDetail;
  }
}
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  auditType:AuditType;
  questionsData:QuestionEntity[];
  question:QuestionEntity;
  myObject:any;
  question1:any;
  question2:any;
  question3:any;
  question4:any;
  question5:any;
  auditRequest:AuditRequest;
  auditDetails:AuditDetails;

  constructor(private questionService:QuestionsDataService,
    private responseService:AuditResponseService,
    public appMenuService:AppMenuService,
    private route:Router) { }

  ngOnInit(): void {
    this.appMenuService.atHome(true);
    this.appMenuService.atQuestions(false);
    //this.appMenuService.atStatus(true);
    //console.log(this.questionService.returnListDatafromHome());
    this.myObject=localStorage.getItem("auditType");
    let obj=JSON.parse(this.myObject);
    this.auditType=obj;
   let auditQuestions:any=localStorage.getItem("auditQuestions");
   let objQuestions=JSON.parse(auditQuestions);
   this.questionsData=objQuestions;

    console.log(typeof obj);
    console.log(obj.auditType);
    console.log(this.auditType.auditType);
    console.log("for audit Questions")
    console.log(typeof this.questionsData);
    //console.log(auditQuestions);
    console.log(this.questionsData[0]);
    //console.log(this.questionsData[0]);
    console.log(typeof this.questionsData[0])
    //this.question=new this.questionsData[0];
    this.question=this.questionsData[0];
    console.log("printins simple 1 questions")
    console.log(this.question);
    console.log(this.question.auditType)
    console.log(this.question.question);
  }
  displayData()
  {
    console.log(this.questionsData);
  }
  showResponse()
  {
    //console.log(this.questionsData);
    let projectManagerName:string=JSON.stringify(localStorage.getItem("projectManagerName"));
    let applicationOwnerName:string=JSON.stringify(localStorage.getItem("applicationOwner"));
    let projectName:string=JSON.stringify(localStorage.getItem("projectName"));
    var date=new Date();
    this.auditDetails=new AuditDetails(this.auditType.auditType,date,this.questionsData);
    this.auditRequest=new AuditRequest(projectName,projectManagerName,applicationOwnerName,this.auditDetails);

    console.log(this.auditRequest);
    this.responseService.getAuditResponse(this.auditRequest).subscribe(
      data=>{
        console.log("this is the last Part");
        console.log(data);
        localStorage.setItem("AuditResponse",JSON.stringify(data));
        this.route.navigate(['status']);
      }
    );
  }

}
