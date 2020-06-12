import { Component, OnInit } from '@angular/core';
import { Submission } from '../submission.model';
import { SubmissionListService } from './submission-list.service';
import { ShowComponentService } from 'src/app/show-component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./styles/submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {
  private subscription: Subscription;
  element: Element;
  approvedSubmissions: Submission[] = [];

  constructor(private subListService: SubmissionListService,
    private showCompService: ShowComponentService) { }

  ngOnInit() {
    this.subListService.checkSubs(this.subListService.submissions, this.approvedSubmissions);
    this.element = document.getElementsByClassName('submission_list')[0];

    this.subscription = this.showCompService.submissionsState.subscribe(state =>{
      if(state){
        setTimeout(()=>{
          this.element.classList.add('initiated');
        }, 2000);
        this.subscription.unsubscribe();
        
      }
    });
    
  }

}
