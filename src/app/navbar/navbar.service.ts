import { Injectable, OnInit } from "@angular/core";

@Injectable({ providedIn: "root" })
export class NavService {
  mainContent: HTMLElement;
  navbar: HTMLElement;
  navSliderBG: HTMLElement;
  navSlider: HTMLElement;
  navLinks: NodeListOf<HTMLElement>;

  toggleNav() {
    this.navbar.classList.toggle("nav-active");
    this.navSliderBG.classList.toggle("nav-active");
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

  getElements() {
    this.mainContent = document.querySelector(".main");
    this.navbar = document.querySelector(".navbar");
    this.navSliderBG = document.querySelector(".nav-links-bg");
    this.navSlider = document.querySelector(".nav-links");
    this.navLinks = document.querySelectorAll(".nav-links li");
  }
}
