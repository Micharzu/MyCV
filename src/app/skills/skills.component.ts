import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowComponentService } from '../show-component.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./styles/skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  rootElement: Element;

  constructor(private showCompService: ShowComponentService) { }

  ngOnInit() {
    this.rootElement = document.getElementsByClassName('skills')[0];

    this.subscription = this.showCompService.skillsState.subscribe(state =>{
      if(state){
        this.rootElement.classList.add('is-visible');
        if(!this.rootElement.classList.contains('initiated')){
          this.rootElement.classList.add('initiation');
          this.rootElement.classList.add('initiated');
          setTimeout(()=>{this.rootElement.classList.remove('initiation')}, 10000);
        }
      } else{
        if(this.rootElement.classList.contains('is-visible')){
          this.rootElement.classList.remove('is-visible');
        }
        
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
