import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: "root"})

export class ShowComponentService{
    sections: NodeListOf<HTMLElement>;

    private showAboutMe = new BehaviorSubject<boolean>(false);
    aboutMeState = this.showAboutMe.asObservable();

    readonly observerOptions = {};

    readonly observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
                this.setComponent(entry.target.id, true);
                if(entry.target.classList.contains('keep-visible')){
                    observer.unobserve(entry.target);
                }
            } else if(entry.target.classList.contains('is-visible')){
                entry.target.classList.remove('is-visible');
                this.setComponent(entry.target.id, false);
            }
        });
    }, this.observerOptions);

    setComponent(sectionId: string, newState: boolean){
        switch(sectionId){
            case "about-me-section":{
                this.showAboutMe.next(newState);
                break;
            }
        }
    }
}