import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

import { mockedArticles, mockedSources } from '../mockups';
import { SourceModel } from '../models';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  private titleService: Title;
  private articles: any;
  private newsLimit: number = 5;
  private onlyOwnNews: boolean = false;
  private filter: string;

  public sources: SourceModel[] = [];

  public selectedSourceId: string;

  public get articlesToDisplay(): any {
    if (!this.selectedSourceId && !this.onlyOwnNews) {
      return;
    }

    const tempArticles: any = (this.onlyOwnNews)
      ? this.articles["own-news"].slice(0, this.newsLimit)
      : this.articles[this.selectedSourceId].slice(0, this.newsLimit);

    if (this.filter) {
      return tempArticles.filter((article) =>
        (article.title + article.content).toLowerCase().includes(this.filter));
    } else {
      return tempArticles;
    }
  }

  constructor(titleService: Title) {
    this.titleService = titleService;
    this.sources = mockedSources;
    this.articles = mockedArticles;
  }

  public ngOnInit(): void {
    this.titleService.setTitle("Breaking News");
  }

  public checkTitle(): void {
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

  public setNewSource(id: string) {
    this.selectedSourceId = id;
    this.checkTitle();
  }

  public setOwnSource(approval: boolean) {
    this.onlyOwnNews = approval;
    this.checkTitle();
  }

  public setNewLimit(): void {
    this.newsLimit += 5;
  }

  public setFilter(newFilter: string): void {
    this.filter = newFilter;
  }
}
