import { NewsArticle } from 'src/app/models/news/news-article.model';

export class NewsPage {
  status: string;
  totalResults: number;
  articles: Array<NewsArticle> = [];
}
