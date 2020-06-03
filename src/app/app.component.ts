import { Component, OnInit, OnDestroy} from '@angular/core';
import { ShowComponentService } from './show-component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'MyCV';

  constructor(private showCompService: ShowComponentService){}

  ngOnInit(){
    this.showCompService.sections = document.querySelectorAll("section");
    this.showCompService.sections.forEach(section=>{
      this.showCompService.observer.observe(section);
    });
  }

  ngOnDestroy(){
  }
  
}