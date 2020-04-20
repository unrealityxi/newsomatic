import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsPage } from 'src/app/models/news/news-page.model';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { LanguageService } from 'src/app/services/language.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { languages } from 'src/app/models/enums/languages.enum';
@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit, OnDestroy {
  public articles: Array<NewsArticle> = [];
  public lang: languages;
  constructor(private newsService: NewsService, private langService: LanguageService) { }


  ngOnInit() {
    this.listenToLanguageChangesAndFetchData();
  }

  fetchNewsData() {
    this.newsService.getTopNews().subscribe((news: NewsPage) => {
      this.articles = news.articles;
    });
  }

  listenToLanguageChangesAndFetchData() {
    this.langService.language$.pipe(untilDestroyed(this)).subscribe((lang) => {
      this.lang = lang;
      this.fetchNewsData();
    });
  }

  ngOnDestroy() {}

}
