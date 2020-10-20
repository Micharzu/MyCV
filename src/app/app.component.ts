import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavService } from "./navbar/navbar.service";
import { ShowComponentService } from "./show-component.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./styles/app-component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "MyCV";

  constructor(
    private showCompService: ShowComponentService,
    private navService: NavService
  ) {}

  toggleNav() {
    this.navService.toggleNav();
  }

  ngOnInit() {
    this.showCompService.sections = document.querySelectorAll("section");
    this.showCompService.sections.forEach((section) => {
      this.showCompService.observer.observe(section);
    });

    this.navService.getElements();
  }

  ngOnDestroy() {}
}
