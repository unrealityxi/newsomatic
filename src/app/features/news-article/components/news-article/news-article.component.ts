import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
})
export class NewsArticleComponent implements OnInit, OnDestroy {
  public article: NewsArticle = new NewsArticle();

  constructor(
    public router: Router,
    public newsService: NewsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.handleArticleLoading();
    this.disableLanguageSelection();
  }

  handleArticleLoading() {
    if (!this.newsService.selectedArticle) {
      return this.router.navigateByUrl('/');
    }

    this.article = this.newsService.selectedArticle;
  }

  disableLanguageSelection() {
    this.languageService.disableLanguageSelection();
  }

  enableLanguageSelection() {
    this.languageService.enableLanguageSelection();
  }

  ngOnDestroy() {
    this.enableLanguageSelection();
  }
}
