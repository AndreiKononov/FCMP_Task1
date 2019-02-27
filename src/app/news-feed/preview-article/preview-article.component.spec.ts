import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { PreviewArticleComponent } from './preview-article.component';
import { SharedModule } from "../../shared";

describe('PreviewArticleComponent:', () => {
  let component: PreviewArticleComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PreviewArticleComponent, TestComponent],
      providers: [{ provide: Router, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.query(By.directive(PreviewArticleComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: `
        <app-preview-article
          [articleData]="{}"
          [articleId]="'42'"
          [isOwnArticle]="false"
        >
        </app-preview-article>
    `
})
class TestComponent {

}
