import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.scss']
})
export class PreviewArticleComponent {
  private router;

  @Input() public articleData: any;

  @Input() public articleId: string;

  @Input() public isOwnArticle: boolean;

  constructor(router: Router) {
    this.router = router;
  }

  public editArticle(): void {
    this.router.navigateByData({url: ["/edit"], data: this.articleData});
  }

  public deleteArticle(): void {
    console.log("delete");
  }
}
