import { Component, OnInit } from "@angular/core";
import { NavService } from "./navbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./styles/navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private navService: NavService) {}

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
    this.navService.toggleNav();
  }

  ngOnInit() {
    this.navService.getElements();
  }
}
