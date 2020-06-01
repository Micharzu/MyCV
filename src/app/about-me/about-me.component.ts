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
  state: boolean;

  constructor(private showCompService: ShowComponentService) { }

  ngOnInit() {
    this.subscription = this.showCompService.showAboutMeState.subscribe(state =>{
      this.state = state;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
