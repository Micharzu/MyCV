import { Component, OnInit } from '@angular/core';
import { Hobby } from '../hobby.model';

@Component({
  selector: 'app-hobby-list',
  templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.css']
})
export class HobbyListComponent implements OnInit {
  hobbies: Hobby[] = [
    new Hobby('HOBBY_1', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_2', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_3', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_4', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_5', 'https://i.gifer.com/74SX.gif'),
    new Hobby('HOBBY_6', 'https://i.gifer.com/74SX.gif')
  ];

  constructor() { }

  ngOnInit() {
  }

}
