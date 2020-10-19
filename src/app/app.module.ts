import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HeaderComponent } from "./header/header.component";
import { SpamComponent } from "./spam/spam.component";
import { SkillsComponent } from "./skills/skills.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { HobbyListComponent } from "./hobbies/hobby-list/hobby-list.component";
import { SubmissionsComponent } from "./submissions/submissions.component";
import { SubmissionListComponent } from "./submissions/submission-list/submission-list.component";
import { SubmissionFormComponent } from "./submissions/submission-form/submission-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    HeaderComponent,
    SpamComponent,
    SkillsComponent,
    FooterComponent,
    ContactComponent,
    HobbiesComponent,
    HobbyListComponent,
    SubmissionsComponent,
    SubmissionListComponent,
    SubmissionFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
