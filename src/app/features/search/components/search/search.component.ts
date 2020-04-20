import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { LanguageService } from 'src/app/services/language.service';
import { tap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { languages } from 'src/app/models/enums/languages.enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchQuery = '';
  searchQuery$ = new Subject<string>();
  articles: Array<NewsArticle>;
  lang: languages;
  constructor(
    private newsService: NewsService,
    private langService: LanguageService
  ) {
    this.initializeSearch();
  }

  handleSearchQueryChange(q) {
    this.searchQuery$.next(q);
  }

  initializeSearch() {
    this.langService.language$.subscribe((lang) => {
      this.lang = lang;
    });
    this.newsService
      .instantSearch(this.searchQuery$)
      .pipe(untilDestroyed(this))
      .subscribe((results) => {
        this.articles = results.articles;
      });
  }

  execSearch() {
    if (this.searchQuery) {
      this.searchQuery$.next(this.searchQuery);
    }
  }

  ngOnInit() {}
  ngOnDestroy() {}
}
