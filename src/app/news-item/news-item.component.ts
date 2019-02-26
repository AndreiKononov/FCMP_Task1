import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { articleMock } from "../mockups";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  private route: ActivatedRoute;
  private router: Router;
  private id: string;
  private sourceId: string;

  public textContent: string = articleMock;

  public articleData: any;

  public isOwnArticle: boolean;

  constructor(route: ActivatedRoute, titleService: Title, router: Router) {
    this.route = route;
    this.router = router;

    const id: string = this.route.snapshot.paramMap.get("id");
    const index: number = id.indexOf("--");
    this.sourceId = id.slice(0, index);
    this.id = id.slice(index + 2);

    this.articleData = this.router.getNavigatedData() || {};

    this.isOwnArticle = this.sourceId === "own-news";
    titleService.setTitle(this.isOwnArticle ? "My own news" : this.articleData.source.name);
  }

  public editArticle(): void {
    this.router.navigateByData({url: ["/edit"], data: this.articleData});
  }

  public deleteArticle(): void {
    console.log("delete");
  }
}
