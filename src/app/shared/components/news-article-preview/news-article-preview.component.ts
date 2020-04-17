import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from 'src/app/models/news/news-article.model';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-article-preview',
  templateUrl: './news-article-preview.component.html',
  styleUrls: ['./news-article-preview.component.scss']
})
export class NewsArticlePreviewComponent implements OnInit {

  @Input() article: NewsArticle = new NewsArticle();

  constructor(public router: Router, public newsService: NewsService) {}

  displayArticleDetails(article: NewsArticle){
    const title = encodeURI(article.title.toLowerCase().split(" ").join("-"));
    this.newsService.selectArticle(article);
    this.router.navigateByUrl(`/articles/${title}`);
  }

  ngOnInit() {
  }

}
