import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Hobby } from '../hobby.model';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./styles/hobby-list.component.css']
})
export class HobbyListComponent implements OnInit, AfterViewInit {
  hobbies: Hobby[] = [
    new Hobby('HOBBY_1', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_2', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_3', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_4', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_5', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_6', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_7', 'https://i.gifer.com/74SX.gif')
  ];

  cards;
  timeout;

  constructor() { }

  cardListAnimate(clarifyAllDelay: number, removeSuppClassDelay: number){

    this.cards.forEach(card =>{
      card.onmouseenter = ()=>{
        clearTimeout(this.timeout);
        
        card.classList.add('active');
        card.classList.remove('blur');
        card.classList.remove('transition');
  
        this.cards.forEach(cardX=>{
          if(!(cardX.classList.contains('active'))){
            cardX.classList.add('blur');
          }
        });  
      };
      card.onmouseleave = ()=>{
        card.classList.remove('active');
        this.timeout = setTimeout(()=>{
          this.cards.forEach(cardX=>{
            cardX.classList.remove('blur');
            cardX.classList.add('transition');
          });
          setTimeout(()=>{
            this.cards.forEach(cardX=>{
              cardX.classList.remove('transition');
            });
          }, removeSuppClassDelay);
        }, clarifyAllDelay);
      };
    });
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.cards = document.querySelectorAll('.hobby_item');
    this.cardListAnimate(300, 5000);
  }

}
