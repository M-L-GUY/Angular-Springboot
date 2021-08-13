import { Injectable } from '@angular/core';
import { AuditType,QuestionEntity } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataService {
  auditType:AuditType;
  questionsData:QuestionEntity[];

  constructor() { }
  getDatafromHome(aType:AuditType,questions:QuestionEntity[])
  {
    this.auditType=aType;
    this.questionsData=questions;
  }
  retreiveAuditType()
  {
    return this.auditType;
  }
  retreiveAuditQuesiton()
  {
    return this.questionsData;
  }
}
