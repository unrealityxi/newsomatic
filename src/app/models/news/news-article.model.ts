import { NewsSource } from './news-source.model';

export class NewsArticle {
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}
