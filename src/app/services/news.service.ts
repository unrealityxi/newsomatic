import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter,
} from 'rxjs/operators';
import { newsCategories } from '../models/enums/newsCategories.enum';
import { languages } from '../models/enums/languages.enum';
import { Observable, of, combineLatest } from 'rxjs';
import { NewsPage } from 'src/app/models/news/news-page.model';
import { LanguageService } from 'src/app/services/language.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { NewsArticle } from './../models/news/news-article.model';

const API_KEY = '505a9d5702f546c9aa25bce60da54dd8';
const NEWS_BASE_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_URL = NEWS_BASE_URL + '/top-headlines?country=';

@Injectable()
export class NewsService {
  lang = languages.us;

  public selectedArticle: NewsArticle;

  constructor(private http: HttpClient, private langService: LanguageService) {
    this.listenToLanguageChanges();
  }

  private listenToLanguageChanges() {
    this.langService.language$.pipe(untilDestroyed(this)).subscribe((lang) => {
      this.lang = lang;
    });
  }

  public getTopNews(): Observable<NewsPage> {
    return this.http.get<NewsPage>(this.getTopNewsUrl(), this.getAuthHeaders());
  }

  public getTopNewsByCategory(category: newsCategories, limit?) {
    const url = this.getTopByCategoryUrl(category, limit);
    return this.http.get(url, this.getAuthHeaders());
  }

  instantSearch(query$: Observable<string>) {
    const queryDebounced$ = query$.pipe(
      filter(q => !!q.trim()),
      debounceTime(400),
      distinctUntilChanged());

    const searchAndLang$ = combineLatest(queryDebounced$, this.langService.language$);
    return searchAndLang$.pipe(
      switchMap((results) => this.getNewsBySearchQuery(results[0]))
    );
  }

  getNewsBySearchQuery(query: string): Observable<NewsPage> {
    if (!query) {
      return;
    }

    query = encodeURIComponent(query);
    return this.http.get<NewsPage>(this.getSearchUrl(query), this.getAuthHeaders());
  }

  private getTopNewsUrl(): string {
    return `${TOP_HEADLINES_URL}${this.lang}`;
  }

  private getTopByCategoryUrl(
    category: newsCategories,
    limit?: number
  ): string {
    const maxItems = limit ? `&pageSize=${limit}` : '';
    return `${this.getTopNewsUrl()}&category=${category}${maxItems}`;
  }

  private getAuthHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('X-Api-Key', API_KEY);

    return {
      headers,
    };
  }

  getSearchUrl(q: string) {
    return TOP_HEADLINES_URL + this.lang + `&q=${q}`;
  }

  selectArticle(article: NewsArticle) {
    this.selectedArticle = article;
  }

  ngOnDestroy() {}
}
