import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from "@angular/router";

import { SourceModel } from '../models';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent {
  private router: Router;

  public onlyOwnNews: boolean;

  @Input() public sources: SourceModel[];

  @Output() public sourceSelectionEvent: EventEmitter<string> = new EventEmitter();

  @Output() public ownNewsCheckEvent: EventEmitter<boolean> = new EventEmitter();

  @Output() public filterEvent: EventEmitter<string> = new EventEmitter();

  constructor(router: Router) {
    this.router = router;
  }

  public setFilter(filter: string): void {
    this.filterEvent.emit(filter ? filter.toLowerCase() : "");
  }

  public setOwnSource(approval: boolean): void {
    this.onlyOwnNews = approval;
    this.ownNewsCheckEvent.emit(approval);
  }

  public selectSource(event): void {
    this.sourceSelectionEvent.emit(event);
  }

  public createNewArticle(): void {
    this.router.navigate(["create"]);
  }
}
