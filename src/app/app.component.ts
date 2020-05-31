import { Component, OnInit, AfterContentInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit{
  title = 'MyCV';
  aboutSectionWasShown = false;

  elementsToShow = document.querySelectorAll('.appear-on-scroll');

  @HostListener("document:scroll") onScroll(){
    if(document.documentElement.scrollTop > 0){

      this.elementsToShow.forEach(el => {
        if(this.isElementInViewport(el)){
          el.classList.add('is-visible');
          if(!this.aboutSectionWasShown && el.classList.contains("is-visible")){
            console.log(el.id);
            this.aboutSectionWasShown = true;
            
          }

          // if(!this.aboutSectionWasShown&&)
        }
        // else{
        //   element.classList.remove('is-visible');
        // }
      });
    }
  }

  isElementInViewport(el){
    var rect = el.getBoundingClientRect();
    return(
      (rect.top <=0 && rect.bottom >=0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)&&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >=0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  

  ngOnInit(){

  }

  ngAfterContentInit(){
    this.elementsToShow = document.querySelectorAll('.appear-on-scroll');
  }
  
}