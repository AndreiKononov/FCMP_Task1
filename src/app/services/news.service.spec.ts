import { TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

import { NewsService } from './news.service';

describe('NewsService:', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsService, {
      provide: HttpClient, useValue: {
        get: () => of({})
      }
    }]
  }));

  it('should be created', () => {
    const service: NewsService = TestBed.get(NewsService);
    expect(service).toBeTruthy();
  });
});
