import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { LanguageService } from 'src/app/services/language.service';
import { newsCategories } from 'src/app/models/enums/newsCategories.enum';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { NewsPage } from 'src/app/models/news/news-page.model';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { languages } from 'src/app/models/enums/languages.enum';

@Component({
  selector: 'app-top-from-category',
  templateUrl: './top-from-category.component.html',
  styleUrls: ['./top-from-category.component.scss'],
})
export class TopFromCategoryComponent implements OnInit {
  categoriesArray = (Object.values(newsCategories) as any);
  articles: Array<NewsArticle>;
  category: any;
  lang: languages;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService,
    private langSvc: LanguageService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (!this.categoriesArray.includes(category)) {
        return this.router.navigateByUrl('/');
      }
      this.category = category;
      this.listenToLanguageChangesAndFetchData();
    });
  }

  fetchNewsData() {
    this.newsService.getTopNewsByCategory(this.category).subscribe((news: NewsPage) => {
      this.articles = news.articles;
    });
  }

  listenToLanguageChangesAndFetchData() {
    this.langSvc.language$.pipe(untilDestroyed(this)).subscribe((lang) => {
      this.lang = lang;
      this.fetchNewsData();
    });
  }

  ngOnDestroy() {};

}
