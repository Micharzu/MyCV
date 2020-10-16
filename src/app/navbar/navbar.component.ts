import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./styles/navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  mainContent: HTMLElement;
  navbar: HTMLElement;
  navSlider: HTMLElement;
  navLinks: NodeListOf<HTMLElement>;

  toHeader() {
    document
      .getElementById("header-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  toAboutMe() {
    document
      .getElementById("about-me-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  toSkills() {
    document
      .getElementById("skills-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  toHobbies() {
    document
      .getElementById("hobbies-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  toContact() {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  toSubmissions() {
    document
      .getElementById("submissions-section")
      .scrollIntoView({ behavior: "smooth" });
  }

  toggleNav() {
    this.navbar.classList.toggle("nav-active");
    this.navSlider.classList.toggle("nav-active");
    this.mainContent.classList.toggle("nav-active");

    this.navLinks.forEach((link, index) => {
      if (link.style.animation.includes("navLinkFadeIn")) {
        link.style.animation = "navLinkFadeOut 0.5s ease forwards";
      } else {
        link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  }

  ngOnInit() {
    this.mainContent = document.querySelector(".main");
    this.navbar = document.querySelector(".navbar");
    this.navSlider = document.querySelector(".nav-links");
    this.navLinks = document.querySelectorAll(".nav-links li");
  }
}
