import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShowComponentService } from '../show-component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  rootElement: Element;

  constructor(private showCompService: ShowComponentService) { }

  ngOnInit() {
    this.rootElement = document.getElementsByClassName('about-me')[0];

    this.subscription = this.showCompService.aboutMeState.subscribe(state =>{
      if(state){
        this.rootElement.classList.add('is-visible');
      } else{
        this.rootElement.classList.remove('is-visible');
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
