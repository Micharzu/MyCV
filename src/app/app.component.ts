import { Component, OnInit, AfterContentInit, HostListener, OnDestroy} from '@angular/core';
import { ShowComponentService } from './show-component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy{
  title = 'MyCV';
  aboutSectionWasShown: boolean;
  private aboutMeSectionSubscription: Subscription;

  constructor(private showCompService: ShowComponentService){}
  appearClass = '.appear-if-in-viewport';

  elementsToShow = document.querySelectorAll(this.appearClass);

  @HostListener("document:scroll") onScroll(){
    if(document.documentElement.scrollTop > 0){
      this.showCompService.manageComponentsVisibility(this.elementsToShow);
    }
  }

  

  

  ngOnInit(){
    this.aboutMeSectionSubscription = this.showCompService.showAboutMeState
    .subscribe(state => this.aboutSectionWasShown = state);
  }

  ngAfterContentInit(){
    this.elementsToShow = document.querySelectorAll(this.appearClass);
  }

  ngOnDestroy(){
    this.aboutMeSectionSubscription.unsubscribe();
  }
  
}