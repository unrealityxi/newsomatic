import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsPage } from 'src/app/models/news/news-page.model';
import { NewsArticle } from 'src/app/models/news/news-article.model';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {
  public newsArticles: Array<NewsArticle> = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.fetchNewsData();
  }

  fetchNewsData() {
    this.newsService.getTopNews().subscribe((news: NewsPage) => {
      this.newsArticles = news.articles;
    })
  }


}
