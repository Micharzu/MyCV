import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  toHeader(){
    document.getElementById("header-section").scrollIntoView({behavior: "smooth"});
  }

  toAboutMe(){
    document.getElementById("about-me-section").scrollIntoView({behavior: "smooth"});
  }

  toSkills(){
    document.getElementById("skills-section").scrollIntoView({behavior: "smooth"});
  }

  toHobbies(){
    document.getElementById("hobbies-section").scrollIntoView({behavior: "smooth"});
  }

  toContact(){
    document.getElementById("contact-section").scrollIntoView({behavior: "smooth"});
  }

  ngOnInit(){
  }
}