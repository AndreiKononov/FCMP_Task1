import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { Component, DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { MatButtonModule, MatOptionModule, MatSelectModule } from "@angular/material";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { noop } from "rxjs";

import { NewsFeedComponent } from './news-feed.component';
import { SourceModel } from "../models";

describe('NewsFeedComponent:', () => {
  let component: NewsFeedComponent;
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsFeedComponent, TestComponent],
      imports: [
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: Router, useValue: { navigate: jasmine.createSpy("navigate")}}],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(NewsFeedComponent)).componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("", () => {
    it('should create', () => {
      spyOn(testComponent, "onSourceSelection");
      fixture.debugElement.query(By.css(".mat-select-trigger")).triggerEventHandler("click", {});
      fixture.detectChanges();
      fixture.debugElement.queryAll(By.css("mat-option"))[1].triggerEventHandler("click", {});
      fixture.detectChanges();
      expect(testComponent.onSourceSelection).toHaveBeenCalledWith("02");
    });

    it('should create', () => {
      spyOn(testComponent, "onFilter");
      const filter: DebugElement = fixture.debugElement.query(By.css("input"));
      filter.triggerEventHandler("keyup", {target: { value: "parapam"}});
      fixture.detectChanges();
      expect(testComponent.onFilter).toHaveBeenCalledWith("parapam");
    });

    it('should create', () => {
      spyOn(testComponent, "onOwnNewsCheck");
      const checkbox: DebugElement = fixture.debugElement.query(By.css("mat-checkbox"));
      checkbox.triggerEventHandler("change", { checked: true });
      fixture.detectChanges();
      expect(testComponent.onOwnNewsCheck).toHaveBeenCalledWith(true);
    });

    it('should create', () => {
      const newArticleButton: DebugElement = fixture.debugElement.query(By.css("button"));
      newArticleButton.triggerEventHandler("click", {});
      fixture.detectChanges();
      expect(router.navigate).toHaveBeenCalledWith(["create"]);
    });
  });
});

@Component({
  template: `
        <app-news-feed
          [sources]="sources"
          (sourceSelectionEvent)="onSourceSelection($event)"
          (ownNewsCheckEvent)="onOwnNewsCheck($event)"
          (filterEvent)="onFilter($event)"
        >
        </app-news-feed>
    `
})
class TestComponent {
  public sources: SourceModel[] = [{id: "01", name: "tass"} as SourceModel, {id: "02", name: "bbc"} as SourceModel];

  public onSourceSelection(): void {
    noop();
  }

  public onOwnNewsCheck(): void {
    noop();
  }

  public onFilter(): void {
    noop();
  }
}
