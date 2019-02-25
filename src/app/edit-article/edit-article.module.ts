import { NgModule } from '@angular/core';

import { EditArticleComponent } from './edit-article.component';
import { SharedModule } from "../shared/index";

@NgModule({
  declarations: [
    EditArticleComponent,
  ],
  exports: [EditArticleComponent],
  imports: [
    SharedModule
  ],
})
export class EditArticleModule {
}
