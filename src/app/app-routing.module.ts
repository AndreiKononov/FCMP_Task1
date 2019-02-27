import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditArticleComponent } from "./edit-article";
import { NewsPageComponent } from "./news-feed";
import { NewsItemComponent } from "./news-item";

const routes: Routes = [
  {path: "", redirectTo: "/news", pathMatch: "full"},
  {path: "news", component: NewsPageComponent},
  {path: "news/:id", component: NewsItemComponent},
  {path: "edit", component: EditArticleComponent},
  {path: "create", component: EditArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
