import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: "root"})

export class ShowComponentService{
    sections: NodeListOf<HTMLElement>;

    private showAboutMe = new BehaviorSubject<boolean>(false);
    aboutMeState = this.showAboutMe.asObservable();

    private showSkills = new BehaviorSubject<boolean>(false);
    skillsState = this.showSkills.asObservable();

    readonly observerOptions = {
        threshold: 0.6
    };

    readonly observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                if(!entry.target.classList.contains('initiated')){
                    entry.target.classList.add('initiated');
                }
                entry.target.classList.add('is-visible');
                
                this.setComponent(entry.target.id, true);
                if(entry.target.classList.contains('keep-visible')){
                    observer.unobserve(entry.target);
                }
            } else if(entry.target.classList.contains('is-visible')){
                entry.target.classList.remove('is-visible');
                entry.target.classList.add('scrolled');
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
            case "skills-section":{
                this.showSkills.next(newState);
                break;
            }
        }
    }
}