import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsArticleRoutingModule } from './news-article-routing.module';
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [NewsArticleComponent],
  imports: [
    CommonModule,
    NewsArticleRoutingModule,
    MatButtonModule
  ]
})
export class NewsArticleModule { }
