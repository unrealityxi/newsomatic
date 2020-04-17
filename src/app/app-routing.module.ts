import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'news-article',
    loadChildren: () =>
      import('./features/news-article/news-article.module').then(
        (m) => m.NewsArticleModule
      ),
  },
  {
    path: 'top-news',
    loadChildren: () =>
      import('./features/top-news/top-news.module').then(
        (m) => m.TopNewsModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./features/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  { path: '', redirectTo: 'top-news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
