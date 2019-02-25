import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { mockedArticles, articleMock } from "../mockups";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
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
    this.articleData = mockedArticles[this.sourceId][this.id];

    this.isOwnArticle = this.sourceId === "own-news";
    titleService.setTitle(this.isOwnArticle ? "My own news" : this.articleData.source.name);
  }

  ngOnInit(): void {

  }

  public editArticle(): void {
    this.router.navigateByData({url: ["/edit"], data: this.articleData});
  }

  public deleteArticle(): void {
    console.log("delete");
  }
}
