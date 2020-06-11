import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowComponentService } from '../show-component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./styles/submissions.component.css']
})
export class SubmissionsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  rootElement: Element;

  constructor(private showCompService: ShowComponentService) { }

  ngOnInit() {
    this.rootElement = document.getElementsByClassName('submissions')[0];

    this.subscription = this.showCompService.submissionsState.subscribe(state =>{
      if(state){
        setTimeout(()=>{
          this.rootElement.classList.add('is-visible');
        }, 2000);
        this.subscription.unsubscribe();
        
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
