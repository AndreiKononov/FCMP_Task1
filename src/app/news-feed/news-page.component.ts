import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { SourceModel} from '../models';
import { NewsService } from "../services/index";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  private titleService: Title;
  private newsService: NewsService;
  private articles: any[] = [];
  private newsLimit: number = 5;
  private onlyOwnNews: boolean = false;
  private filter: string;

  public sources: SourceModel[] = [];

  public selectedSourceId: string;

  public get articlesToDisplay(): any {
    if (this.filter) {
      return this.articles.filter((article) =>
        (article.title + article.content).toLowerCase().includes(this.filter));
    } else {
      return this.articles;
    }
  }

  constructor(titleService: Title, newsService: NewsService) {
    this.titleService = titleService;
    this.newsService = newsService;
  }

  public ngOnInit(): void {
    this.titleService.setTitle("Breaking News");
    this.newsService.fetchChannels().subscribe((sources: SourceModel[]) => {
      this.sources = sources;
    });
  }

  public setNewSource(id: string) {
    this.selectedSourceId = id;
    this.checkTitle();
    this.getNews();
  }

  public setOwnSource(approval: boolean) {
    this.onlyOwnNews = approval;
    this.checkTitle();
  }

  public setNewLimit(): void {
    this.newsLimit += 5;
    this.getNews();
  }

  public setFilter(newFilter: string): void {
    this.filter = newFilter;
  }

  private getNews(): void {
    this.newsService.fetchNews(this.selectedSourceId, this.newsLimit).subscribe((news: any) => {
      this.articles = news;
    });
  }

  private checkTitle(): void {
    this.newsLimit = 5;

    if (this.selectedSourceId && !this.onlyOwnNews) {
      const newSource: SourceModel = this.sources.find((source: SourceModel) => source.id === this.selectedSourceId);
      this.titleService.setTitle(newSource.name);
    } else if (this.onlyOwnNews) {
      this.titleService.setTitle("My own news");
    } else {
      this.titleService.setTitle("Breaking News");
    }
  }
}
