import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { SourceModel } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class NewsService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  fetchChannels(): Observable<SourceModel[]> {
    return this.httpClient.get("https://newsapi.org/v2/sources?apiKey=e9979803c3894fa182b399c482279297")
      .pipe(
        map((response: any) => response.sources)
      );
  }

  fetchNews(channel: string, amount: number): Observable<any> {
    if (amount > 100) {
      amount = 100;
    } else if (amount <= 0 || !amount) {
      amount = 20;
    }

    return this.httpClient.get(
      `https://newsapi.org/v2/everything?sources=${channel}&pageSize=${amount}&apiKey=e9979803c3894fa182b399c482279297`
    ).pipe(
      map((response: any) => response.articles)
    );
  }
}
