import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EditArticleComponent } from './edit-article.component';

@NgModule({
  declarations: [
    EditArticleComponent,
  ],
  exports: [EditArticleComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EditArticleModule {
}
