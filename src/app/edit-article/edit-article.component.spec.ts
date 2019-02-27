import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import "angular2-navigate-with-data";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { EditArticleComponent } from './edit-article.component';
import { SharedModule } from "../shared";

describe('EditArticleComponent:', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditArticleComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: Router, useValue: { url: "/create", getNavigatedData: jasmine.createSpy("getNavigatedData")}},
        { provide: Location, useValue: {}},
        { provide: Title, useValue: { setTitle: jasmine.createSpy("setTitle")}},
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
