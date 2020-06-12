import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowComponentService } from 'src/app/show-component.service';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./styles/submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit {
  private subscription: Subscription;
  element: Element;

  constructor(private showCompService: ShowComponentService) { }

  onSendForm(){}

  ngOnInit() {
    this.element = document.getElementsByClassName('submission_form-container')[0];

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
