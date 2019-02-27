import { NgModule } from '@angular/core';

import { SharedModule } from "../shared";
import { NewsFeedComponent } from './news-feed.component';
import { PreviewArticleComponent } from "./preview-article/preview-article.component";
import { NewsPageComponent } from "./news-page.component";

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsFeedComponent,
    PreviewArticleComponent,
  ],
  exports: [NewsPageComponent],
  imports: [
    SharedModule,
  ]
})
export class NewsPageModule {
}
