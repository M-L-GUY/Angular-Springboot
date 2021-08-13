import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuditType, QuestionEntity } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CheckListQuestionsService {
  tokenString:any;


  constructor(private http:HttpClient) { }

   executeCheckListQuestions(auditType:string)
   {
     let tokenStr=`Bearer ${sessionStorage.getItem("token")}`;
     const headers:HttpHeaders=new HttpHeaders().set('Authorization',tokenStr);
     return this.http.post<QuestionEntity[]>(`http://localhost:8080/AuditCheckListQuestions/`,{headers:headers,response:'text' as 'JSON'});
   }
  // executeCheckListQuestions(auditType:string)
  // {
  //   return this.http.post('http://localhost:8080/AuditCheckListQuestions').pipe
  // }
  executeCheckListQuestions2(auditType:AuditType)
   {
     let tokenStr=`Bearer ${sessionStorage.getItem("token")}`;
     const headers:HttpHeaders=new HttpHeaders().set('Authorization',tokenStr);
     return this.http.post<QuestionEntity[]>(`http://localhost:8080/AuditCheckListQuestions/`,auditType,{headers:headers});
   }

}
