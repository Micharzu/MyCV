import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ShowComponentService } from "src/app/show-component.service";
import { SubmissionListService } from "../submission-list/submission-list.service";

@Component({
  selector: "app-submission-form",
  templateUrl: "./submission-form.component.html",
  styleUrls: ["./styles/submission-form.component.css"],
})
export class SubmissionFormComponent implements OnInit {
  private subscription: Subscription;
  element: Element;

  submissionForm: FormGroup;

  constructor(
    private showCompService: ShowComponentService,
    private submissionService: SubmissionListService
  ) {}

  onSubmit() {
    // console.log(this.submissionForm.value.username);

    this.submissionService.addSub(
      this.submissionForm.value.username,
      this.submissionForm.value.content
    );
  }

  ngOnInit() {
    this.element = document.getElementsByClassName(
      "submission_form-container"
    )[0];

    this.subscription = this.showCompService.submissionsState.subscribe(
      (state) => {
        if (state) {
          setTimeout(() => {
            this.element.classList.add("initiated");
          }, 2000);
          this.subscription.unsubscribe();
        }
      }
    );

    this.submissionForm = new FormGroup({
      username: new FormControl(null),
      content: new FormControl(null),
    });
  }
}
