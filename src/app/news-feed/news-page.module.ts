import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

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
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class NewsPageModule { }
