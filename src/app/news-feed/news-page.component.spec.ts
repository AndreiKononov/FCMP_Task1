import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By, Title } from "@angular/platform-browser";
import { of } from "rxjs";

import { NewsPageComponent } from './news-page.component';
import { NewsService } from "../services";
import { SharedModule } from "../shared";

describe('NewsPageComponent:', () => {
  let fixture: ComponentFixture<NewsPageComponent>;
  let component: NewsPageComponent;
  let titleService: Title;
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        NewsPageComponent
      ],
      providers: [
        { provide: Title, useValue: { setTitle: jasmine.createSpy("setTitle")}},
        {
          provide: NewsService,
          useValue: {
            fetchChannels: jasmine.createSpy("fetchChannels").and.returnValue(of([{id: "own-news", name: "Own"}])),
            fetchNews: jasmine.createSpy("fetchChannels").and.returnValue(of([{}]))
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageComponent);
    component = fixture.componentInstance;
    titleService = TestBed.get(Title);
    newsService = TestBed.get(NewsService);
    fixture.detectChanges();
  });

  describe("Initialization of the component:", () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should create the app', () => {
      expect(titleService.setTitle).toHaveBeenCalledWith("Breaking News");
    });
  });

  describe("Initialization of the component:", () => {
    let newsFeed: DebugElement;

    beforeEach(() => {
      newsFeed = fixture.debugElement.query(By.css("app-news-feed"));
    });

    it('should create the app', () => {
      spyOn(component, "setNewSource").and.callThrough();
      newsFeed.triggerEventHandler("sourceSelectionEvent", "own-news");
      expect(component.setNewSource).toHaveBeenCalledWith("own-news");
      expect(component.selectedSourceId).toBe("own-news");
    });

    it('should create the app', () => {
      spyOn(component, "setOwnSource").and.callThrough();
      newsFeed.triggerEventHandler("ownNewsCheckEvent", true);
      expect(component.setOwnSource).toHaveBeenCalledWith(true);
    });

    it('should create the app', () => {
      spyOn(component, "setFilter").and.callThrough();
      newsFeed.triggerEventHandler("filterEvent", "stub_filter");
      expect(component.setFilter).toHaveBeenCalledWith("stub_filter");
    });

    it('should create the app', () => {
      spyOn(component, "setNewLimit").and.callThrough();
      newsFeed.triggerEventHandler("sourceSelectionEvent", "own-news");
      fixture.detectChanges();
      fixture.debugElement.query(By.css("button")).triggerEventHandler("click", {});
      expect(component.setNewLimit).toHaveBeenCalled();
    });
  });
});
