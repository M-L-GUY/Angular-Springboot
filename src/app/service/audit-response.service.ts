import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuditRequest } from '../questions/questions.component';

@Injectable({
  providedIn: 'root'
})
export class AuditResponseService {

  constructor(private http:HttpClient) { }
  getAuditResponse(auditRequest:AuditRequest)
{
  // let tokenStr=`Bearer ${sessionStorage.getItem("token")}`;
  //    const headers:HttpHeaders=new HttpHeaders().set('Authorization',tokenStr);
  //    return this.http.post(`http://localhost:8080/ProjectReponseStatus`,auditRequest,{headers:headers});
     let tokenStr=`Bearer ${sessionStorage.getItem("token")}`;
     const headers:HttpHeaders=new HttpHeaders().set('Authorization',tokenStr);
     return this.http.post(`http://localhost:8080/ProjectReponseStatus`,auditRequest,{headers:headers});
}
}

