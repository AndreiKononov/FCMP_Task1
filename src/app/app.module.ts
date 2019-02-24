import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import "angular2-navigate-with-data";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPageModule } from './news-feed';
import { EditArticleModule } from './edit-article';
import { NewsItemComponent } from './news-item';

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NewsPageModule,
    EditArticleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
