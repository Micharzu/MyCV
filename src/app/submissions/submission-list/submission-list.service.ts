import { Injectable } from '@angular/core';
import { Submission } from '../submission.model';

@Injectable({providedIn: "root"})

export class SubmissionListService{
    submissions: Submission[] = [
        new Submission(
          "name_1",
          "Texttexttexttext texttexttext texttext texttexttext texttexttexttexttexttext.",
          new Date("July 21, 1983 01:15:00"),
          true),
    
        new Submission(
          "name_2",
          "Texttexttexttext texttexttext texttext texttexttext texttexttexttexttexttext.",
          new Date("July 21, 1983 01:15:00"),
          true),
    
        new Submission(
          "name_3",
          "Texttexttexttext texttexttext.",
          new Date("July 21, 1983 01:15:00"),
          true),
    
        new Submission(
          "name_4",
          "Texttexttexttext texttexttext texttext texttexttext texttexttexttexttexttext.",
          new Date("July 21, 1983 01:15:00")),
    
        new Submission(
          "name_5",
          "Texttexttexttext texttexttext texttext texttexttext texttexttexttexttexttext.\nTexttexttexttext texttexttext texttext.",
          new Date("July 21, 1983 01:15:00"),
          true),
      ];


      checkSubs(subs: Submission[], approvedSubs: Submission[]){
        for (let i = 0; i < subs.length; i++) {
          if(subs[i].approval){
            approvedSubs.push(subs[i]);
          }
        }
      }
}