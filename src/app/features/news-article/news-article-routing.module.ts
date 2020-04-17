import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsArticleComponent } from './components/news-article/news-article.component';

const routes: Routes = [
  { path: ':article', component: NewsArticleComponent },
  { path: '', redirectTo: '/top-news' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsArticleRoutingModule {}
