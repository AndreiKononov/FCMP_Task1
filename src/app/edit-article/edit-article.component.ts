import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  private fb;
  private location: Location;
  private router: Router;

  public form: FormGroup;

  public article: any;

  constructor(titleService: Title, router: Router, fb: FormBuilder, location: Location) {
    this.router = router;
    this.location = location;
    this.fb = fb;
    const title: string = (router.url.includes("create")) ? "Create article" : "Edit article";
    titleService.setTitle(title);
  }

  ngOnInit() {
    this.article = this.router.getNavigatedData() || {};
    this.form = this.fb.group({
      heading: [this.article.title, Validators.required],
      description: this.article.description,
      content: [this.article.content, Validators.required],
      image: this.article.urlToImage,
      date: new Date().toISOString(),
      author: this.article.author,
      url: this.article.url
    });
  }

  public onCancel(): void {
    this.location.back();
  }

  public onSave(): void {
    console.log("save article");
  }

}
