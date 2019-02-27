import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from "@angular/router";
import { By, Title } from "@angular/platform-browser";
import "angular2-navigate-with-data";

import { NewsItemComponent } from './news-item.component';
import { SharedModule } from "../shared";

describe('NewsItemComponent:', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;
  let titleService: Title;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [NewsItemComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => "own-news--5" }}}},
        { provide: Router, useValue: {
            navigateByData: jasmine.createSpy("navigateByData"),
            getNavigatedData: jasmine.createSpy("getNavigatedData").and.returnValue({})
        }},
        { provide: Title, useValue: jasmine.createSpyObj("Title", ["setTitle"])}
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    titleService = TestBed.get(Title);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  describe("Component initialization:", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should create', () => {
      expect(titleService.setTitle).toHaveBeenCalledWith("My own news");
    });
  });

  describe("Component initialization:", () => {
    const editButton: Function = () => fixture.debugElement.queryAll(By.css('button'))[0];
    const deleteButton: Function = () => fixture.debugElement.queryAll(By.css('button'))[1];

    it('should create', () => {
      expect(!!editButton()).toBeTruthy();
      expect(!!deleteButton()).toBeTruthy();
    });

    it('should create', () => {
      component.isOwnArticle = false;
      fixture.detectChanges();
      expect(!!editButton()).toBeFalsy();
      expect(!!deleteButton()).toBeFalsy();
    });

    it('should create', () => {
      spyOn(component, "editArticle").and.callThrough();
      editButton().triggerEventHandler("click", {});
      expect(component.editArticle).toHaveBeenCalled();
      expect(router.navigateByData).toHaveBeenCalledWith({url: ["/edit"], data: component.articleData});
    });

    it('should create', () => {
      spyOn(component, "deleteArticle").and.callThrough();
      deleteButton().triggerEventHandler("click", {});
      expect(component.deleteArticle).toHaveBeenCalled();
    });
  });
});
