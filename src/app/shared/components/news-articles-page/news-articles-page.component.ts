import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'src/app/models/news/news-article.model';

@Component({
  selector: 'app-news-articles-page',
  templateUrl: './news-articles-page.component.html',
  styleUrls: ['./news-articles-page.component.scss']
})
export class NewsArticlesPageComponent implements OnInit {

  @Input() articles: Array<NewsArticle> = [];

  constructor() { }

  ngOnInit() {
  }

}
