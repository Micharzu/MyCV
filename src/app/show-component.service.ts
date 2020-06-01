import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: "root"})

export class ShowComponentService{

    private showAboutMe = new BehaviorSubject<boolean>(false);
    showAboutMeState = this.showAboutMe.asObservable();

    setState(newState: boolean, componentName: string){
        switch(componentName){
            case "about-me-component":{
                this.showAboutMe.next(newState);
                break;
            }
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

    manageComponentsVisibility(elementsToShow: NodeListOf<Element>){
        let processedComponent;
        elementsToShow.forEach(el => {
            if(this.isElementInViewport(el)){
                switch(el.id){
                    case "about-me-component": {
                        processedComponent = this.showAboutMeState;
                        break;
                    }
                }
                if(!el.classList.contains('is-visible')){
                    el.classList.add('is-visible');
                    this.setState(true, el.id);
                }
            }
            else if(
            el.classList.contains('disappear-if-not-in-viewport')
            && el.classList.contains('is-visible')){

                el.classList.remove('is-visible');
            }
        });
    }
}